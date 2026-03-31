`compress-images.mjs` compresses local image assets with `sharp`.

Example:

```bash
npm run compress-images -- --input asses --output-dir asses-compressed
```

Useful flags:

- `--overwrite`: write back to the original files
- `--dry-run`: preview what would be written
- `--max-width 1600 --max-height 1600`: downscale oversized images
- `--quality 82`: adjust compression strength
