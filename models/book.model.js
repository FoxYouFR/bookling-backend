const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  author: {
    type: String,
    trim: true,
    minlength: 1
  },
  description: {
    type: String,
    trim: true,
    minlength: 1
  },
  condition: {
    type: String,
    required: true,
    trim: true
  },
  boughtOn: {
    type: Number
  },
  price: {
    type: Number
  }
});

module.exports = moongoose.model('Book', BookSchema);