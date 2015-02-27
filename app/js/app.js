'use strict';
/*
app routing
 */
var app = angular.module('AngularStore', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller:'ShopController',
            templateUrl:'partial/shop.html'
        })
        .when('/shop', {
            controller:'ShopController',
            templateUrl:'partial/shop.html'
        })
        .when('/myCart', {
            controller:'ShopController',
            templateUrl:'partial/myCart.html'
        })
        .otherwise({
            redirectTo:'/'
        });
});

