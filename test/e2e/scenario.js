/**
 * Created by ilpirata on 16/09/2014.
 */
'use strict';



describe('angular store App', function() {

    it('should redirect index.html to /', function() {
        browser.ignoreSynchronization = true;
        browser.get('app/index.html');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/');
        });
    });


    describe('product list view', function() {

        beforeEach(function() {
            browser.get('/');
        });


        it('should filter the product list as user types into the search box', function() {

            var productList = element.all(by.repeater('product in products'));
            var query = element(by.model('search'));

            expect(productList.count()).toBe(8);

            query.sendKeys('apple');
            expect(productList.count()).toBe(2);

            query.clear();
            query.sendKeys('avocado');
            expect(productList.count()).toBe(1);
        });

        /* menu */
        it('should consist of 2 menu items', function() {

            var list = element.all(by.css('.nav li'));
            expect(list.count()).toBe(2);
        });
    });

    it('should add an apple to cart, navigate to the /myCart page when clicking', function (cart) {
        element(by.css('.btn')).click();
        element(by.css('.nav li:nth-child(2)')).click();
        expect(browser.getCurrentUrl()).toMatch(/\/myCart/);
        cart = element.all(by.repeater('product in cart'));
        expect(cart.count()).toBe(1);
    });
    it('should add an item and check cart', function() {
        element(by.css('.btn')).click();
        expect($scope.cart.count()).toBe(1);
    });

    it('should add an apple to the cart and check total count', function() {

        element(by.css('.btn')).click();
        var text =element(by.css('.table tr td b'));
        expect(text.getText()).toBe('1');

    });
});
