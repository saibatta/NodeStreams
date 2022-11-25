console.clear();
const fs = require("fs");
// Delete a file
const deleteFile = async () => {
    fs.unlink("./data/temp.csv", (err) => {
        if (err) throw err;
        console.log("successfully deleted /tmp/hello");
    });
};
// deleteFile()

const copyFiles = async () => {
    await fs.copyFile("./data/import.csv", "./data/open.csv", () => {
        console.log("File copied successfully !!");
    });
};
copyFiles();