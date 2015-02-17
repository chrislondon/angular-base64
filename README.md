angular-base64
==============

AngularJS module for Base64 encoding/decoding

Most of the code came from http://www.webtoolkit.info/javascript-base64.html

How to use
---------------------------
```js
angular.module('myApp', [
    // ...
    'ngBase64',
    // ...
]).controller('myController', function (Base64) {
    var encoded = Base64.encode('string to encode');

    var decoded = Base64.decode(encoded);
});
```