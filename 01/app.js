
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { readFile } from 'node:fs';
import { join } from 'node:path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

readFile(join(__dirName, 'text1.txt'), "utf-8",(err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});



console.log(math(40,10,5));


