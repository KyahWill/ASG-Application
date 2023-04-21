const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New connection established.');

    socket.on('message', (msg) => {
        io.emit('message', msg);
        console.log(msg)
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});