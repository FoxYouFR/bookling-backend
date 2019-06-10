const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config.json');

const port = process.env.port || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/loans', require('./routes/loans'));
app.use('/books', require('./routes/books'));

mongoose.connect(config.mongodb.url, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});