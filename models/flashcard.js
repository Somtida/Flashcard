'use strict';

const mongoose = require('mongoose');

let Flashcard = mongoose.model('Flashcard',{
  category: String,
  question: String,
  answer: String,
  hint: String,
  choice1: String,
  choice2: String,
  choice3: String
});

module.exports = Flashcard;
