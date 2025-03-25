import { put } from '@vercel/blob';
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import mime from "mime-types";
import dotenv from "dotenv";

// This file is used to upload files located in `public` directory
// to Vercel Blob storage.
// Eaxmple:
// node uploadFile.js public/relative/path/to/your/file.txt

// Get the current file's directory (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local file
dotenv.config({ path: path.join( __dirname, '..', ".env.local") });

// Set the root directory for files uploaded as public/ directory
const ROOT_FOLDER = path.join( __dirname, '..', "public");

// Universal upload function
async function uploadFile(relativeFilePath) {
  const filePath = path.join(ROOT_FOLDER, relativeFilePath);

  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return;
  }

  const fileBuffer = fs.readFileSync(filePath);
  const fileName = filePath.split("/").pop();
  const contentType = mime.lookup(filePath) || "application/octet-stream"; // Detect content type

  const blob = await put(fileName, fileBuffer, {
    access: "public",
    contentType: contentType,
    token: process.env['BLOB_READ_WRITE_TOKEN'],
  });

  console.log(`File uploaded (${contentType}):`, blob.url);
}

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node upload.js <file-path>");
} else {
  uploadFile(filePath).catch(console.error);
}
