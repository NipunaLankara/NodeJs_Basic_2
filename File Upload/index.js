import { createServer } from "node:http";
import { IncomingForm } from "formidable";
import { copyFile, rm, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Get current file path and directory
const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

// Ensure 'upload' folder exists
const uploadDir = join(__dirName, "upload");
if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir);
}

const server = createServer((req, res) => {
    const method = req.method;

    if (method === "POST") {
        const userData = new IncomingForm();

        userData.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500);
                res.end("Error parsing form");
                console.error(err);
                return;
            }

            console.log("Fields:", fields);
            console.log("Files:", files);

            const tempFilePath = files.user_file[0].filepath;
            const fileName = files.user_file[0].originalFilename;
            const uploadFilePath = join(uploadDir, fileName);

            copyFile(tempFilePath, uploadFilePath, (err) => {
                if (err) {
                    console.error("Copy error:", err);
                    res.writeHead(500);
                    res.end("Failed to save file.");
                    return;
                }

                rm(tempFilePath, (err) => {
                    if (err) {
                        console.error("Temp delete error:", err);
                    } else {
                        console.log("Deleted temp file:", tempFilePath);
                    }
                });

                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("File uploaded successfully!");
            });
        });
    }

    else if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Upload File</title>
</head>
<body>
    <form action="/" method="post" enctype="multipart/form-data">
        <input name="name" id="name" type="text" />
        <input type="file" name="user_file" />
        <button type="submit">Add</button>
    </form>
</body>
</html>`);
    }

    else {
        res.writeHead(405);
        res.end("Method Not Allowed");
    }
});

server.listen(2000, "127.0.0.1", () => {
    console.log("✅ Server Started at http://127.0.0.1:2000");
});
