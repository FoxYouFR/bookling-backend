const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

router.get('/', (req, res) => {
  Book.find((err, books) => {
    if(err) console.log(err);
    else res.json(books);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id, (err, book) => {
    if(err) console.log(err);
    else res.json(book);
  });
});

router.post('/create', (req, res) => {
  const book = new Book(req.body);
  book.save().then(book => {
    res.json(book);
  }).catch(err => {
    res.status(400).send(err);
  });
});

router.patch('/edit/:id', (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if(!book) res.status(404).send();
    else {
      book.title = req.body.title;
      book.author = req.body.author;
      book.description = req.body.description;
      book.condition = req.body.condition;
      book.boughtOn = req.body.boughtOn;
      book.price = req.body.price;
      book.save().then(book => {
        res.json(book);
      }).catch(err => {
        res.status(400).send(err);
      });
    }
  })
});

router.delete('/delete/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id).then(book => {
    res.json(book);
  }).catch(err => {
    res.status(400).send();
  });
});

module.exports = router;