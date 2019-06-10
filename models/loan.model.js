const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const LoanSchema = new Schema({
  bookID: {
    type: String,
    required: true
  },
  borrower: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  lentAt: {
    type: Number,
    required: true
  }
});

module.exports = moongoose.model('Loan', LoanSchema);