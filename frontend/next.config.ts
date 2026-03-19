import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repoOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserPagesRepo = repoName !== "" && repoName === `${repoOwner}.github.io`;
const basePath = process.env.BASE_PATH ?? (isUserPagesRepo || repoName === "" ? "" : `/${repoName}`);

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
