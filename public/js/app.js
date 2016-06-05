'use strict';

// Declare app level module which depends on filters, and services

angular.module('refinersApp', [
    'refinersApp.controllers',
    'refinersApp.filters',
    'refinersApp.services',
    'refinersApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    }).
    when('/training', {
      templateUrl: 'partials/training.html',
      controller: 'trainingCtrl'
    }).
    when('/1911', {
      templateUrl: 'partials/1911.html',
      controller: '1911Ctrl'
    }).
    when('/suppressor', {
      templateUrl: 'partials/suppressor.html',
      controller: 'suppressorCtrl'
    }).
    when('/services', {
      templateUrl: 'partials/services.html',
      controller: 'servicesCtrl'
    }).
    when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'contactCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'aboutCtrl'
    }).
    when('/location', {
      templateUrl: 'partials/location.html',
      controller: 'locationCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
