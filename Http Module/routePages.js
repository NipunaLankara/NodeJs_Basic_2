import aboutUs from "./pages/aboutUs.js";
import home from "./pages/home.js";

const pageSelect =(url,res)=>{
    if (url==='/' || url === '/home') {
        res.end(home());
        console.log("New Request");

    } else if (url === '/about') {
        res.end(aboutUs());
        console.log("Request about");
    }


}

export default pageSelect;