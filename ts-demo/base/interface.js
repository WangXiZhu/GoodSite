"use strict";
exports.__esModule = true;
function getCounter() {
    function counter(str) {
    }
    counter.title = '123';
    counter.add = function (str) { };
    return counter;
}
var counter = {
    title: '123',
    add: function (str1) { }
};
var Sub = /** @class */ (function () {
    function Sub() {
        this.title = 'abc';
    }
    Sub.prototype.add = function (str) {
        console.log(this.title + str);
    };
    Sub.prototype.decerate = function (num) {
        return 1;
    };
    return Sub;
}());
exports["default"] = {
    run: function () {
        var sub = new Sub();
        sub.add('-1234');
        console.error(sub.decerate(1));
    }
};
