import { readFile, appendFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const _fileName = fileURLToPath(import.meta.url);
const _dirName = dirname(_fileName);

// Read from read.txt
readFile(join(_dirName, "read.txt"), "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Error reading read.txt:", err);
    });

// Append to write.txt
const writeFilePath = join(_dirName, "write.txt");

appendFile(writeFilePath, "Hi Node Js\n", "utf-8")
    .then(() => {
        console.log("Added to write.txt");
    })
    .catch((err) => {
        console.log("Error appending to write.txt:", err);
    });

// Add text1.txt content to write.txt
readFile(join(_dirName, "text1.txt"), "utf-8")
    .then((data) => {
        if (data) {
            return appendFile(writeFilePath, data + "\n", "utf-8");
        }
    })
    .catch((err) => {
        console.log("Error processing text1.txt:", err);
    });

// Write to write2.txt using async function
const writeFunction = async (data) => {
    try {
        await writeFile(join(_dirName, "write2.txt"), data, {
            encoding: "utf-8",
        });
        console.log("write2.txt written successfully");
    } catch (err) {
        console.log("Error writing write2.txt:", err);
    }
};

// Auto File Create Method....
const autoFileCreate = async (filename, data) => {
    try {
        const filePath = join(_dirName, filename);
        await writeFile(filePath, data, { encoding: "utf-8" });
        console.log(`${filename} created successfully!`);
    } catch (err) {
        console.error(`Error writing ${filename}:`, err);
    }
};


writeFunction("This is a write2");

autoFileCreate("write3.txt", "This file was auto-created with Node.js!");

