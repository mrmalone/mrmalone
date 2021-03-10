const { sum, dif } = require('./helpers');

/**
 *  Aici am invatat cum se face un server http
 * si cum se poate folosi nodemon
 */

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("hello world! with nodemon");
// });

// server.listen(3000);

// const total = helpers.sum(10, 15);
// const total2 = helpers.inm(14, 30);

// console.log("Total ", total);
// console.log("Total inm", total2);

// console.log("Total inm", sum(10, 4));
// console.log("Total inm", dif(10, 4));

/**
 * Aici am invatat despre express
 * 
 */

// const express = require('express')
// const app = express()

// // app.get('/', function(req, res) {
// //     res.send('Hello World')
// // })

// app.get('/', (req, res) => {
//     res.send('hey boss');
// });

// app.listen(3000)

const fs = require('fs');
const fileName = "ceva.txt";

// sync model
// const data = fs.readFileSync(fileName);
// console.log(data.toString());
// console.log('node js sync prog');

// fs.watch(fileName, () => {
//     console.log('File changed!');
// })

// async model
// fs.readFile(fileName, (err, data) => {
//     if (err) { console.log(err) }
//     console.log(data.toString());
// });

//console.log('node js async prog');

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err);
    dataHandler(data);
});