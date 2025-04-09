// read_file.js
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import {readFile} from "node:fs/promises";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const fileRead = async (path) => {
    try {
        // const data = await readFile(join(__dirName, path), "utf-8");
        // return data;
        return await readFile(join(__dirName, path), "utf-8");
    } catch (err) {
        console.error("Error reading file:", err);
        throw err; // rethrow to let caller handle it
    }
};
