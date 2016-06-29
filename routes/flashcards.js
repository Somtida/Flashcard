'use strict';

const express = require('express');
let Flashcard = require('../models/flashcard');


let router = express.Router();



router.route('/')
  .get((req, res)=>{
    Flashcard.find({}, (err, flashcards)=>{
      res.status(err ? 400 : 200).send(err || flashcards);
    });
  })
  .post((req, res)=>{
    Flashcard.create(req.body, (err)=>{
      res.status(err ? 400 : 200).send(err);
    });
  })
  .delete((req, res)=>{
    Flashcard.remove({},(err)=>{
      res.status(err ? 400 : 200).send(err);

    });
  })


// DELETE /api/flashcards/:id

router.route('/:id')
  .get((req,res)=>{
    Flashcard.findById(req.params.id, (err,flashcard)=>{
      res.status(err ? 400:200).send(err || flashcard);
    });
  })
  .delete((req,res)=>{
    Flashcard.findByIdAndRemove(req.params.id,err=>{
      res.status(err ? 400: 200).send(err);
    });
  })
  .put((req,res)=>{
    Flashcard.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, savedDoc)=>{
      res.status(err ? 400: 200).send((err || savedDoc));
    });
  })

module.exports = router;
