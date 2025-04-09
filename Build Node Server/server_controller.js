import { fileRead } from "./read_file.js";
import { serveStaticFile } from "./serve_static.js"; // assuming you saved the second code in serve_static.js

const serverFun = async (req, res) => {
    const { url, method } = req;

    // Serve the homepage
    if (url === '/' && method === 'GET') {
        try {
            const data = await fileRead('public/index.html');
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } catch (err) {
            console.error(err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
        }
    }
    // Serve static assets like CSS
    else if (url.endsWith(".css") || url.endsWith(".js") || url.endsWith(".png") || url.endsWith(".jpg")) {
        await serveStaticFile(url, res);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
};

export default serverFun;
