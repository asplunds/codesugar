const fs = require("fs");
const path = require("path");

const cache = new Map<string, string>();


/**
 * https://stackoverflow.com/a/62989835/13188385
 * @internal
 * @param {string} relativeName "resources/foo/goo"
 * @return {string[]}
 */
const listFileNames = (relativeName: string): string[] => {
    try {
        const folderPath:string = path.join(process.cwd(), ...relativeName.split("/"));
        
        return fs
            .readdirSync(folderPath, { withFileTypes: true })
            .filter((dirent) => dirent.isFile())
            .map((dirent: { name: string; }) => dirent.name.split(".")[0]);
    } catch (err) {
        // ...
    }
};

const loaded = listFileNames("./loader")
    .forEach((file: string) => {
        const contents = require(file);

        console.log(contents);
    });

console.log(listFileNames("./loader"), "hey?!");

export const test = [];