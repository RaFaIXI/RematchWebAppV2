import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Full path to the /public/video directory
const VIDEO_DIR = path.join(__dirname, "public/video");

function getAllVideos(dirPath, prefix = "/video") {
  const files = fs.readdirSync(dirPath);
  return files.flatMap((file) => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.join(prefix, file);
    if (fs.statSync(fullPath).isDirectory()) {
      return getAllVideos(fullPath, path.join(prefix, file));
    }
    if (file.endsWith(".mp4")) {
      return [`<link rel="preload" href="${relativePath.replace(/\\/g, "/")}" as="video" type="video/mp4" />`];
    }
    return [];
  });
}

const preloadTags = getAllVideos(VIDEO_DIR).join("\n");

// Save to a file
fs.writeFileSync("preload-tags.html", preloadTags);
console.log("✅ Preload tags generated in preload-tags.html");
