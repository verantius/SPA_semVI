const http = require('http');
//const app = require('./app');
const functions = require('firebase functions')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
require('dotenv').config();

const port = process.env.port || 4000;
const server = http.createServer(port);

// mongoose.connect(
//   `mongodb+srv://${process.env.USER_MAIN}:${process.env.PASS_MAIN}@cluster0.xvenj.mongodb.net/${process.env.DB_MAIN}?retryWrites=true&w=majority`
// );

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

//import i obsługa portów
//app.use('/users', require('./routes/users'))
//app.use('/badania', require('./routes/badania'))

app.use((req, res, next) => {
  res.status(400).json({ wiadomosc: 'Brak danych' });
});


// ustawianie i tworzenie serwera

//server start
server.listen(port, () => {
    console.log(`jestes online na porcie: ${port}`);
});

//module.exports = app;
exports.app = functions.https.onRequest(app)