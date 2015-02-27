'use strict';
/*
shop controller logic
 */
   app.controller('ShopController', function( $scope,  DataCart, DataStore) {
       $scope.text = 'Hello World!';
        $scope.products = DataStore.getStore();
        $scope.cart = DataCart.getCart();

        $scope.addItem = function(item){
            $scope.cart = DataCart.addItem(item);
        };
        $scope.removeItem = function(item){
            $scope.cart = DataCart.removeItem(item);
        };
        $scope.clearCart = function(){
            $scope.cart = DataCart.clearCart();
        };
        $scope.getTotalCount = function(){
            return DataCart.getTotalCount();
        };
        $scope.getTotalPrice = function(){
            return DataCart.getTotalPrice();
        };
    });

