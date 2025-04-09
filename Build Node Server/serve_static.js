import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const getContentType = (ext) => {
    switch (ext) {
        case ".css": return "text/css";
        case ".js": return "application/javascript";
        case ".json": return "application/json";
        case ".png": return "image/png";
        case ".jpg": return "image/jpeg";
        case ".jpeg": return "image/jpeg";
        case ".svg": return "image/svg+xml";
        case ".ico": return "image/x-icon";
        default: return "application/octet-stream";
    }
};

export const serveStaticFile = async (url, res) => {
    try {
        const ext = extname(url);
        const contentType = getContentType(ext);
        const filePath = join(__dirName, "public", url); // public/index.css, etc.

        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (err) {
        console.error("Static file error:", err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File Not Found");
    }
};
