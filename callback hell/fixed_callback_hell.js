const { readdir, readFile, writeFile} = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const readdir(inbox, (error, files) => {
    if (error) return console.log("Error: Folder inaccessible")
});

const readAndWrite = readFile(join(inbox, file), "utf8", (error, data) => {
    if (error) return console.log("Error: File error");
    writefn(join(outbox, file))
});

const writefn = reverseText(data), error => {
    if (error) return console.log("Error: File could not be saved!");
    console.log(`${file} was successfully saved in the outbox!`);
  };
