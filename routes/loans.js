const express = require('express');
const router = express.Router();
const Loan = require('../models/loan.model');

router.get('/', (req, res) => {
  Loan.find((err, loans) => {
    if(err) console.log(err);
    else res.json(loans);
  });
});

router.get('/:id', (req, res) => {
  Loan.findById(req.params.id, (err, loan) => {
    if(err) console.log(err);
    else res.json(loan);
  });
});

router.post('/create', (req, res) => {
  const loan = new Loan(req.body);
  loan.save().then(loan => {
    res.json(loan);
  }).catch(err => {
    res.status(400).send(err);
  });
});

router.patch('/edit/:id', (req, res) => {
  Loan.findById(req.params.id, (err, loan) => {
    if(!loan) res.status(400).send();
    else {
      loan.bookID = req.body.bookID;
      loan.borrower = req.body.borrower;
      loan.lentAt = req.body.lentAt;
      loan.save().then(loan => {
        res.json(loan);
      }).catch(err => {
        res.status(400).send(err);
      });
    }
  });
});

router.delete('/delete/:id', (req, res) => {
  Loan.findByIdAndDelete(req.params.id).then(loan => {
    res.json(loan);
  }).catch(err => {
    res.status(400).send(err);
  });
});

module.exports = router;