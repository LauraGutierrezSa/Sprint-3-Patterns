const { readdir, readFile, writeFile, write } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

const writeFiles = (file, data) => {
    writeFile(join(outbox, file), reverseText(data), (error) => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
    });
};

const readAndWrite = (file) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) return console.log("Error: File error");
        writeFiles(file, data);
    });
};

readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach((file) => readAndWrite(file));
});
