console.clear();
const fs = require("fs");

const writeStream = fs.createWriteStream("./data/import.csv", {
  flags: "a", // append the new content where the cursor left previously
  encodeing: "encoding",
  mode: 0744,
});

const write = async () => {
  for (let i = 0; i < 100; i++) {
    writeStream.write(
      `${i} :Hello world Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
    );
  }
};
const read = async () => {
  const readStream = fs.createReadStream("./data/import.csv", {
    highWaterMark: 100,
  });
  readStream.on("data", (buffer) => {
    console.log(">>> read data : ", buffer.toString());
  });
  readStream.on("end", () => {
    console.log(" >> end of Read starem >>>");
  });
};
const main = async () => {
  await write();
  await read();
};

// main();


