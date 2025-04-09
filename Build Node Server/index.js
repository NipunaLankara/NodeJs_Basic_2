import { createServer } from "node:http";
import serverFun from "./server_controller.js";


const server = createServer(async (req, res) => {
    await serverFun(req, res);
});

const PORT = process.env.PORT || 2000;
server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server Started at http://127.0.0.1:${PORT}`);
});
