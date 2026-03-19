import type { NextConfig } from "next";

function normalizeBasePath(rawBasePath?: string) {
  if (!rawBasePath) {
    return "";
  }

  const withLeadingSlash = rawBasePath.startsWith("/")
    ? rawBasePath
    : `/${rawBasePath}`;
  const trimmed = withLeadingSlash.replace(/\/+$/, "");

  return trimmed === "/" ? "" : trimmed;
}

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repoOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserPagesRepo = repoName !== "" && repoName === `${repoOwner}.github.io`;
const defaultBasePath = isUserPagesRepo || repoName === "" ? "" : `/${repoName}`;
const basePath = normalizeBasePath(process.env.BASE_PATH ?? defaultBasePath);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
