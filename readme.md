- Streams, pipes, and chaining are the core and most powerful features in Node.js.
- Streams can indeed help you write neat and performant code to perform I/O.

### What are streams?

- Streams are one of the fundamental concepts that power Node.js applications. They are data-handling method and are used to read or write input into output sequentially.

- Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

- What makes streams unique, is that instead of a program reading a file into memory all at once like in the traditional way, streams read chunks of data piece by piece, processing its content without keeping it all in memory.

- This makes streams really powerful when working with large amounts of data, for example, a file size can be larger than your free memory space, making it impossible to read the whole file into the memory in order to process it. That’s where streams come to the rescue!

- Using streams to process smaller chunks of data, makes it possible to read larger files.

- Let’s take a “streaming” services such as YouTube or Netflix for example: these services don’t make you download the video and audio feed all at once. Instead, your browser receives the video as a continuous flow of chunks, allowing the recipients to start watching and/or listening almost immediately.

- However, streams are not only about working with media or big data. They also give us the power of ‘composability’ in our code. Designing with composability in mind means several components can be combined in a certain way to produce the same type of result. In Node.js it’s possible to compose powerful pieces of code by piping data to and from other smaller pieces of code, using streams.

#### Streams basically provide two major advantages compared to other data handling methods:

- <b>Memory efficiency: </b>you don’t need to load large amounts of data in memory before you are able to process it
- <b>Time efficiency: </b>it takes significantly less time to start processing data as soon as you have it, rather than having to wait with processing until the entire payload has been transmitted

### There are 4 types of streams in Node.js:

- <b>Writable :</b> streams to which we can write data. For example, fs.createWriteStream() lets us write data to a file using streams.
- <b>Readable :</b> streams from which data can be read. For example: fs.createReadStream() lets us read the contents of a file.
- <b>Duplex :</b> streams that are both Readable and Writable. For example, net.Socket
- <b>Transform :</b> streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.

### Streams-powered Node APIs

#### Due to their advantages, many Node.js core modules provide native stream handling capabilities, most notably:

- <u>net.Socket</u> is the main node api that is stream are based on, which underlies most of the following APIs
- <u>process.stdin </u> returns a stream connected to stdin
- <u>process.stdout </u> returns a stream connected to stdout
- <u>process.stderr</u> returns a stream connected to stderr
- <u>fs.createReadStream()</u> creates a readable stream to a file
- <u>fs.createWriteStream()</u> creates a writable stream to a file
- <u>net.connect()</u> initiates a stream-based connection
- <u>http.request()</u> returns an instance of the http.ClientRequest class, which is a writable stream
- <u>zlib.createGzip()</u> compress data using gzip (a compression algorithm) into a stream
- <u>zlib.createGunzip()</u> decompress a gzip stream.
- <u>zlib.createDeflate() </u> compress data using deflate (a compression algorithm) into a stream
- <u>zlib.createInflate() </u> decompress a deflate stream

## Nodejs streams

![](https://images.ctfassets.net/hspc7zpa5cvq/3s8p9qQe6zDEfhwLyq5fQR/7ce28dd384a590009aaaa16886bb83eb/cheat1.png)

![](https://images.ctfassets.net/hspc7zpa5cvq/1vZrS7rb7U7DRb5TtT8hs8/bb6285794d4141c3a572770651fcc753/cheat2.png)

![](https://images.ctfassets.net/hspc7zpa5cvq/2rPAh1mmsLg02i0hLBG2DG/9829c1fb9cf396d952f1d155ce799f13/cheat3.png)

![](https://images.ctfassets.net/hspc7zpa5cvq/3HncUkiyjekdWjN8MwQbfi/29b3ad1806e8ce161a889c76667e780f/cheat3.png)

![](https://images.ctfassets.net/hspc7zpa5cvq/24pAlF9SE7EYkg4Xb2CtlW/8ae386aaf08e513372a09100bb8cd48a/Webp.net-resizeimage.png)
