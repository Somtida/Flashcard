'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/',
      template: '<h1>Welcome</h1>',
    })
    .state('showall', {
      url: '/showall',
      templateUrl: '/html/showall.html',
      controller: 'showallCtrl'
    })
    .state('editpage', {
      url: '/editpage',
      templateUrl: '/html/editpage.html',
      controller: 'editpageCtrl'
    })
    .state('practice', {
      url: '/practice',
      templateUrl: '/html/practice.html',
      controller: 'practiceCtrl'
    })
    .state('flashcard', {
      url: '/createcard',
      templateUrl: '/html/create.html',
      controller: 'createCtrl'
    })

})
