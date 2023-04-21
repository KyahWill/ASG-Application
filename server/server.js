const express = require('express');
const app = express();
const server = require('http').createServer(app);
const sqlite3 = require('sqlite3').verbose();
const io = require('socket.io')(server);
let db = new sqlite3.Database('chat.sqlite3', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  
// db.run('CREATE TABLE messages(name, text, date)');

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New connection established.');

    socket.on('message', (msg) => {
        io.emit('message', msg);
        console.log(msg)
        db.run(`INSERT INTO messages(name, text, date) VALUES($name, $text, $date)`, [this.lastID, msg, Date.now()], function(err) {
            if (err) {
              return console.log(err.message);
            }
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

