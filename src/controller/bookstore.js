import mongoose   from 'mongoose';
import { Router } from 'express';
import BookStore  from '../model/bookstore';
import bodyParser from 'body-parser';

export default({ config, db }) => {
  let api = Router();

  // Post
  api.post('/add', (req, res) => {
    let newBook = new BookStore(req.body);

    newBook.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({message: 'Book added with success!', newBook})
    });
  });

  // Get
  api.get('/', (req, res) => {
    BookStore.find({}, (err, books) => {
      if (err) {
        res.send(err);
      }
      res.json({books});
    });
  });

  // Get by ID
  api.get('/:id', (req, res) => {
    let _id = req.params.id;

    BookStore.find({_id}, (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json({book});
    });
  });

  // Put (on passe par un post pour update)
  api.post('/update/:id', (req, res) => {
    let _id = req.params.id;
    BookStore.findOneAndUpdate({_id}, req.body, (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Book updated with success!', book});
    });
  });

  // Delete
  api.delete('/:id', (req, res) => {
    let _id = req.params.id;
    BookStore.remove({_id}, (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Book removed with success!'});
    });
  });

  return api;
}
