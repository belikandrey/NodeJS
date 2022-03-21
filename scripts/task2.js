const csvtojson = require('csvtojson')
const {pipeline} = require('stream');
const fs = require('fs')

const ws = fs.createWriteStream('output.txt');
const rs = fs.createReadStream('./csv/test.csv')

pipeline(rs, csvtojson(), ws, (err) => {
    if (err) {
        console.error("Pipeline Failed", err);
    } else {
        console.log("Pipeline succeeded");
    }
})