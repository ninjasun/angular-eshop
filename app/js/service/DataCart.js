/*
factory imp for shared cart data
 */
app.factory("DataCart", function () {
    var cart = []; /* item = {id,name,price,quantity}*/

    return {
        addItem: function (product) {
            for(var i = 0; i<cart.length; i++) {
                console.log(cart[i]);
                if (cart[i].id ==( product.id)) {

                    console.log(product.id);
                    cart[i].quantity++;
                    return cart;
                }
            }
            var item = {
                "id":product.id,
                "name": product.name,
                "price":parseFloat(product.price),
                "quantity":1
            };
            cart.push(item);
            return cart;
        },
        removeItem: function (product) {

            for(var i = 0; i<cart.length; i++) {
                if (cart[i].id == product.id) {
                    if (cart[i].quantity == 1) {
                        cart.splice(i, 1);
                    }
                    else {
                        cart[i].quantity--;
                    }
                    return cart;
                }
            }
            return cart;
        },
        getCart: function(){
            return cart;
        },
        clearCart: function(){
            var cart =[];
            return cart;
        },
        getTotalCount: function(){
            var totalCount =0;
            for(var i = 0; i<cart.length; i++) {
                totalCount += cart[i].quantity;
            }
            return totalCount;
        },
        getTotalPrice: function(){
            var totalPrice=parseFloat(0);
            for(var i = 0; i<cart.length; i++) {
                totalPrice += cart[i].price * cart[i].quantity;
            }
           return totalPrice;
        }

    }
});
