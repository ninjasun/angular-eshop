

describe('ShopController', function(){
    var scope, $httpBackend;


//mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('AngularStore'));

//mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        $httpBackend.when('getStore').respond([]
        );
        $httpBackend.when('getCart').respond([]
        );
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('ShopController', {$scope: scope});
    }));
    // tests start here

    it('should fetch list of product with 8 products', function(){
        expect(scope.products.length).toBe(8);
        expect(scope.products[0].name).toBe('Apple');
    });

    it('should fetch an empty cart products', function(){
        expect(scope.cart.length).toBe(0);
    });

});
