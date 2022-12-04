const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
require('dotenv').config();

// statyczny katalog ze zdjęciami
//app.use('/uploads', express.static('uploads'));

// połączenie z bazą danych
mongoose.connect(
  `mongodb+srv://${process.env.USER_MAIN}:${process.env.PASS_MAIN}@cluster0.xvenj.mongodb.net/${process.env.DB_MAIN}?retryWrites=true&w=majority`
);

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

//import i obsługa portów
app.use('/users', require('./routes/users'))
app.use('/badania', require('./routes/badania'))


app.get("/", (req, res, next) =>{
  //const id = req.params.id;
  res.status(200).json({wiadomosc: 'server OK' })
})


app.use((req, res, next) => {
  res.status(400).json({ wiadomosc: 'Brak danych' });
});

module.exports = app;
