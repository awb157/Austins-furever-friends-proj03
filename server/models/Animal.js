const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const animalSchema = new Schema({
  name: {
    type: String,
  },
  breed: {
    type: String,
    trim: true,
  },
  age: {
    type: String
  },
  sex: {
    type: String
  },
  species: {
    type: String
  },
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;
