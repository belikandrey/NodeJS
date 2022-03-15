const csvtojson = require('csvtojson')
const fs = require('fs')

const ws = fs.createWriteStream('output.txt');

csvtojson()
.fromFile("./csv/test.csv")
    .subscribe((json)=>{
        ws.write(JSON.stringify(json)+'\n');
    }, console.error);
