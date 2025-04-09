
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";


const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);


const PORT = process.env.PORT || 2000;

const server = createServer((req,res)=>{

})

server.listen(PORT, "127.0.0.1", () => {
    console.log(`✅ Server Started at http://127.0.0.1:${PORT}`);
});
