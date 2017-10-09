import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let BookSchema = new Schema({
  "titre":    {type: String, required: true},
  "auteur":   {type: String, required: true},
  "sortie":   {type: Number, required: true},
  "pages":    {type: Number, required: true},
  "creation": {type: Date, default: Date.now()}
});

module.exports = mongoose.model('BookStore', BookSchema)
