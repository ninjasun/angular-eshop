'use strict';
/*
factory imp for store shared data
 */
app
.factory("DataStore", function () {
    var store = [
        {
            "id": "APL",
            "name": "Apple",
            "description": "Eat one every day to keep the doctor away!",
            "price": "12.90"
        },
        {
            "id": "AVC",
            "name": "Avocado",
            "description": "Guacamole anyone?",
            "price": "16.556"
        },
        {
            "id": "BAN",
            "name": "Banana",
            "description": "These are rich in Potassium and easy to peel.",
            "price": "4"
        },
        {
            "id": "CTP",
            "name": "Cantaloupe",
            "description": "Delicious and refreshing.",
            "price": "6.5960"
        },
        {
            "id": "FIG",
            "name": "Fig",
            "description": "OK, not that nutritious, but sooo good!",
            "price": "3.99"
        },
        {
            "id": "GRF",
            "name": "Grapefruit",
            "description": "Pink or red, always healthy and delicious.",
            "price": "12"
        },
        {
            "id": "MAN",
            "name": "Mango",
            "description": "Messy to eat, but well worth it.",
            "price": "7.354"
        },
        {
            "id": "PNP",
            "name": "Pineapple",
            "description": "Enjoy it (but don't forget to peel first).",
            "price": "7.24"
        }
    ];

    return {
        getStore: function () {
            return store;
        }}
});

