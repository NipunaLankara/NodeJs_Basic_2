import {createServer} from "node:http";
import pageSelect from "./routePages.js";

const server =createServer((req,res)=>{
    pageSelect(req.url,res);

});

server.listen(4000, '127.0.0.1', () => {
    console.log("✅ Server Started at http://127.0.0.1:4000");
});
