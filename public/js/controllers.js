'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function() {
  console.log('mainCtrl!');
});

app.controller('practiceCtrl', function($scope, Flashcard) {
  console.log('parcticeCtrl!');
  $scope.flashcards = [];
  // // $scope.showCategory = false;
  // // $scope.startButton = true;
  //
  // $scope.startPractice = () =>{
  //   // $scope.startButton = false;
  //   // $scope.showCategory = true;
  //
  // }
  Flashcard.get()
    .then(res=>{
      console.log("res.data: ",res.data);
      $scope.flashcards = res.data;
    })
    .catch(err=>{
      console.log("err: ",err);
    })

  $scope.getSelectedCategory = () =>{
    console.log("selectedCategory: ",$scope.selectedCategory);
    // $scope.flashcards.filter(card=>{
    //   if()
    // })
  }
});

app.controller('createCtrl', function($scope, Flashcard) {
  console.log('createCtrl!');
  $scope.createCardArea = true;
  // $scope.showCardList = false;
  // $scope.showCreateCardArea = () =>{
  //   $scope.createCardArea = true;
  // }
  $scope.createNewCard = () =>{
    console.log($scope.newCard);
    Flashcard.post($scope.newCard)
    .then(res=>{
      console.log("posted");

    })
    // .then(()=>{
    //   console.log("posted");
    // })
    .catch(err=>{
      console.log("err: ",err);
    })
    console.log($scope.newCard);
    $scope.newCard = "";
  }

  $scope.closeCreateCardArea = () =>{
    $scope.createCardArea = false;
  }



});

app.controller('showallCtrl', function($scope, Flashcard){
  $scope.showCardList = true;
  $scope.editArea = false;
  Flashcard.get()
    .then(res=>{
      console.log("res.data: ",res.data);
      $scope.flashcards = res.data;
    })
    .catch(err=>{
      console.log("err: ",err);
    })

  $scope.editFlashcard = (index) => {
    console.log("index: ", $scope.flashcards[index]);
    $scope.editArea = true;
    let edit = angular.copy($scope.flashcards[index]);
    $scope.editCard = edit;
    $scope.editCardArea = true;

  }

  $scope.deleteFlashcard = (index) => {
    // console.log("index: ", $scope.flashcards[index]);
    let id = $scope.flashcards[index]._id;
    // console.log(id);
    Flashcard.delete(id)
      .then(()=>{
        console.log("deleted");
      })
      .catch(err=>{
        console.log("err: ",err);
      })
    $scope.flashcards.splice(index,1);
  }

  $scope.closeEditCardArea = () =>{
    $scope.editCardArea = false;
  }

})
