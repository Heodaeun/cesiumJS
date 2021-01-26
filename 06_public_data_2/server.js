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
var Filedata = fs.readFileSync('Floating_population.json', 'utf-8');
var position = fs.readFileSync('position.json', 'utf-8');

io.on('connection', (socket)=> {
    console.log('connected');

    io.emit('init', Filedata, position);

});
