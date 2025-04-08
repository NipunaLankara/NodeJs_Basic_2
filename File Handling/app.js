import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';
import {appendFile, readFile, writeFile} from 'node:fs';
import {join} from 'node:path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

readFile(join(__dirName, 'read.txt'), "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});


const filePath = join(__dirName, 'write.txt');
console.log('Writing to:', filePath);


writeFile(filePath, 'I like to NodeJs', 'utf-8', (err) => {
    console.log('Inside callback...');
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('File written successfully');
    }
});

//  Not delete content.........

appendFile(filePath, '\nThis line was added without deleting the previous content.', 'utf-8', (err) => {
    if (err) {
        console.error('Error appending:', err);
    } else {
        console.log('Content appended successfully!');
    }
});



