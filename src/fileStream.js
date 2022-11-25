
const fs = require('fs');
const { pipeline } = require('stream');
const zlib = require('zlib');

const readStream = fs.createReadStream('./data/open.csv');
const filepipe = () => {
    const writeStream = fs.createWriteStream('./data/writestream.csv')
    readStream.on('read', (chunk) => {
        console.log(`Recieved Chunk data ${chunk.length} bytes of data`);
        readStream.pipe(writeStream)
        readStream.pause();
        console.log('Data paused for some time');
        setTimeout(() => {
            console.log('data stream resumed after 3sec')
            readStream.resume();
        }, 3000);
        console.log(`Recieved Chunk data ${chunk.length} bytes of data`);
    })
}
// filepipe();

const fileStreamPipeline = () => {
    pipeline(fs.createReadStream('./data/open.csv'), zlib.createGzip(), fs.createWriteStream('./data/open.csv.gz'), (err) => {
        if (err) {
            console.log('Pipelined failed  error : ', err)
        } else {
            console.log('Pipelined Suceedded....');
        }
    })
}

fileStreamPipeline();
