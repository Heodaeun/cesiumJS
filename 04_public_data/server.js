var express = require('express');
var app = express();
var http = require('http').Server(app);
const fs = require('fs');
const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});


var server = http.listen('3000', () => {
    console.log('Application Running: http://localhost:%d', server.address().port);
});

var io = require('socket.io')(server); 
app.use(express.static('public'));

// Read csv file
var Filedata = fs.readFileSync('number_data.csv', 'utf-8');

var a = '[';
lines = Filedata.split('\n');
for(var i=0; i<lines.length; i++){
    line = lines[i];    // 한 줄

    var j = 0;
    while(line[j] !== ','){ j++; }

    var longtitude = line.slice(0, j);
    var latitude = line.slice(j+1, -1);
    a += '{"lng": ' + longtitude + ', "lat": ' + latitude + '}';
    if(i != lines.length - 1) { a += ','; }
}
a += ']';
fs.writeFileSync('converted.json', (a));


io.on('connection', (socket)=> {
    console.log('connected');
    io.emit('init', a);
});




// var Filedata = fs.readFileSync('public_data.txt', 'utf-8');
// lines = Filedata.split('\n');

// var array = [];

// for(var i=0; i<lines.length; i++){
//     line = lines[i];    // 한 줄
//     var a = [];
//     for(var j=0, k=0; j<line.length; j++){
//         word = line[j]; // 한 글자
//         if(word == '\t'){
//             k++
//         }else{
//             a[k] += word;
//         }
//     }
//     array.push(a);
//     // console('log: ', line[12], ', lat: ', line[13]);
// }
// console.log(array);
// fs.writeFileSync('converted.json', (array));


