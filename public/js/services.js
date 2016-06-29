'use strict';

var app = angular.module('myApp');

app.service('Flashcard', function($http){
  this.get = () => {
    return $http.get('/api/flashcards');
  }
  this.post = newCard => {
    return $http.post('/api/flashcards', newCard);
  }
  this.delete = id => {
    return $http.delete(`/api/flashcards/${id}`);
  }
  this.put = (id, newCard) => {
    return $http.put(`/api/flashcards/${id}`, newCard);
  }
})
