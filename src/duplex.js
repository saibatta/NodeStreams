const { Duplex } = require("node:stream");

const duplex = Duplex({
  objectMode: true,
  read() {
    this.push("world");
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log("writable", chunk);
    callback();
  },
});

const { readable, writable } = Duplex.toWeb(duplex);
writable.getWriter().write("hello");

readable
  .getReader()
  .read()
  .then((result) => {
    console.log("readable", result.value);
  });
