import {csv} from 'csvtojson'
import * as fs from 'fs'
import {pipeline} from 'stream'

export const csvToText = () => {


    const ws = fs.createWriteStream('output.txt');
    const rs = fs.createReadStream('./csv/test.csv')

    pipeline(rs, csv(), ws, (err) => {
        if (err) {
            console.error("Pipeline Failed", err);
        } else {
            console.log("Pipeline succeeded");
        }
    })
}