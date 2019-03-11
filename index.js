const DEBUG = true;

const express = require('express');
const app = require('express')();
const cookie = require('cookie');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');


//User variables1
let port = 3000;


console.log(io);

app.use(express.static('client'));
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/client/index.html');
});

require('./socket.js')(io);

//////////////
//Start server
server.listen(port, () => {
    console.log('listening on port: ' + port);
});
