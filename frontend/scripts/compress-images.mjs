import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import sharp from "sharp";

const SUPPORTED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);
const SUPPORTED_OUTPUT_FORMATS = new Set(["original", "png", "jpeg", "webp", "avif"]);

function printUsage() {
  console.log(`
Usage:
  npm run compress-images -- [options]

Options:
  --input <path>         File or directory to compress. Default: asses
  --output-dir <path>    Directory for compressed files. Default: asses-compressed
  --quality <number>     Quality for lossy formats. Default: 82
  --max-width <number>   Resize down to this width if needed. Default: 1600
  --max-height <number>  Resize down to this height if needed. Default: 1600
  --format <value>       original | png | jpeg | webp | avif. Default: original
  --overwrite            Replace files in place instead of writing to output-dir
  --recursive            Scan subdirectories. Default: true
  --no-recursive         Only scan the top directory
  --dry-run              Show what would happen without writing files
  --help                 Show this message
`);
}

function parseArgs(argv) {
  const options = {
    input: "asses",
    outputDir: "asses-compressed",
    quality: 82,
    maxWidth: 1600,
    maxHeight: 1600,
    outputFormat: "original",
    overwrite: false,
    recursive: true,
    dryRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help") {
      options.help = true;
      continue;
    }

    if (arg === "--overwrite") {
      options.overwrite = true;
      continue;
    }

    if (arg === "--recursive") {
      options.recursive = true;
      continue;
    }

    if (arg === "--no-recursive") {
      options.recursive = false;
      continue;
    }

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    const nextValue = argv[index + 1];
    if (!nextValue || nextValue.startsWith("--")) {
      throw new Error(`Missing value for ${arg}`);
    }

    if (arg === "--input") {
      options.input = nextValue;
      index += 1;
      continue;
    }

    if (arg === "--output-dir") {
      options.outputDir = nextValue;
      index += 1;
      continue;
    }

    if (arg === "--quality") {
      options.quality = Number.parseInt(nextValue, 10);
      index += 1;
      continue;
    }

    if (arg === "--max-width") {
      options.maxWidth = Number.parseInt(nextValue, 10);
      index += 1;
      continue;
    }

    if (arg === "--max-height") {
      options.maxHeight = Number.parseInt(nextValue, 10);
      index += 1;
      continue;
    }

    if (arg === "--format") {
      options.outputFormat = nextValue.toLowerCase();
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!Number.isInteger(options.quality) || options.quality < 1 || options.quality > 100) {
    throw new Error("--quality must be an integer between 1 and 100");
  }

  if (!Number.isInteger(options.maxWidth) || options.maxWidth < 1) {
    throw new Error("--max-width must be a positive integer");
  }

  if (!Number.isInteger(options.maxHeight) || options.maxHeight < 1) {
    throw new Error("--max-height must be a positive integer");
  }

  if (!SUPPORTED_OUTPUT_FORMATS.has(options.outputFormat)) {
    throw new Error("--format must be one of: original, png, jpeg, webp, avif");
  }

  return options;
}

async function collectImageFiles(targetPath, recursive) {
  const stats = await fs.stat(targetPath);

  if (stats.isFile()) {
    return SUPPORTED_EXTENSIONS.has(path.extname(targetPath).toLowerCase()) ? [targetPath] : [];
  }

  const files = [];
  const entries = await fs.readdir(targetPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(targetPath, entry.name);

    if (entry.isDirectory()) {
      if (recursive) {
        files.push(...(await collectImageFiles(fullPath, recursive)));
      }
      continue;
    }

    if (entry.isFile() && SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function createTransformer(extension, quality) {
  switch (extension) {
    case ".png":
      return (image) =>
        image.png({
          quality,
          compressionLevel: 9,
          effort: 10,
          palette: true,
        });
    case ".jpg":
    case ".jpeg":
      return (image) =>
        image.jpeg({
          quality,
          mozjpeg: true,
        });
    case ".webp":
      return (image) =>
        image.webp({
          quality,
          effort: 6,
        });
    case ".avif":
      return (image) =>
        image.avif({
          quality,
          effort: 7,
        });
    default:
      return null;
  }
}

function getOutputExtension(inputExtension, outputFormat) {
  if (outputFormat === "original") return inputExtension;
  if (outputFormat === "jpeg") return ".jpg";
  return `.${outputFormat}`;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function percentChange(before, after) {
  if (before === 0) return "0.0%";
  return `${(((before - after) / before) * 100).toFixed(1)}%`;
}

async function compressFile(filePath, options, relativeRootPath) {
  const extension = path.extname(filePath).toLowerCase();
  const outputExtension = getOutputExtension(extension, options.outputFormat);
  const transform = createTransformer(
    options.outputFormat === "original" ? extension : outputExtension,
    options.quality,
  );
  if (!transform) {
    return { filePath, skipped: true, reason: "unsupported format" };
  }

  if (options.outputFormat !== "original" && extension === outputExtension && !options.overwrite) {
    return { filePath, skipped: true, reason: "already matches target format" };
  }

  const originalBuffer = await fs.readFile(filePath);
  let image = sharp(originalBuffer, { animated: false, failOn: "warning" }).rotate();

  image = image.resize({
    width: options.maxWidth,
    height: options.maxHeight,
    fit: "inside",
    withoutEnlargement: true,
  });

  const compressedBuffer = await transform(image).toBuffer();

  let outputPath = filePath;
  if (!options.overwrite) {
    const relativePath = path.relative(relativeRootPath, filePath);
    const relativeSafePath = relativePath.startsWith("..")
      ? path.basename(filePath)
      : relativePath;
    const parsedPath = path.parse(relativeSafePath);
    outputPath = path.join(options.outputDir, `${parsedPath.dir ? `${parsedPath.dir}${path.sep}` : ""}${parsedPath.name}${outputExtension}`);
  } else if (options.outputFormat !== "original") {
    outputPath = path.join(path.dirname(filePath), `${path.parse(filePath).name}${outputExtension}`);
  }

  const outputDirectory = path.dirname(outputPath);

  if (!options.dryRun) {
    await fs.mkdir(outputDirectory, { recursive: true });
    await fs.writeFile(outputPath, compressedBuffer);
  }

  return {
    filePath,
    outputPath,
    originalSize: originalBuffer.length,
    compressedSize: compressedBuffer.length,
    wroteFile: !options.dryRun,
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printUsage();
    return;
  }

  const cwd = process.cwd();
  const inputPath = path.resolve(cwd, options.input);
  const outputDir = path.resolve(cwd, options.outputDir);
  options.outputDir = outputDir;
  const inputStats = await fs.stat(inputPath);
  const relativeRootPath = inputStats.isFile() ? path.dirname(inputPath) : inputPath;

  const files = await collectImageFiles(inputPath, options.recursive);

  if (files.length === 0) {
    console.log(`No supported images found in ${inputPath}`);
    return;
  }

  let totalOriginal = 0;
  let totalCompressed = 0;

  for (const filePath of files) {
    const result = await compressFile(filePath, options, relativeRootPath);

    if (result.skipped) {
      console.log(`skip  ${path.relative(cwd, filePath)} (${result.reason})`);
      continue;
    }

    totalOriginal += result.originalSize;
    totalCompressed += result.compressedSize;

    const sourceLabel = path.relative(cwd, result.filePath);
    const targetLabel = path.relative(cwd, result.outputPath);
    const writeLabel = options.dryRun ? "plan" : "done";

    console.log(
      `${writeLabel}  ${sourceLabel} -> ${targetLabel} | ${formatBytes(result.originalSize)} -> ${formatBytes(result.compressedSize)} (${percentChange(result.originalSize, result.compressedSize)})`,
    );
  }

  console.log("");
  console.log(`Processed ${files.length} image(s)`);
  console.log(`Before: ${formatBytes(totalOriginal)}`);
  console.log(`After:  ${formatBytes(totalCompressed)}`);
  console.log(`Saved:  ${formatBytes(totalOriginal - totalCompressed)} (${percentChange(totalOriginal, totalCompressed)})`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
