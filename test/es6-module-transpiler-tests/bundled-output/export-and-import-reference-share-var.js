'use strict';

/* jshint esnext:true */

var a = 1;
assert.equal(a, 1);

/* jshint esnext:true */

var a_ = a, b = 9, c = 'c';

assert.equal(a, 1);
assert.equal(a_, 1);
assert.equal(b, 9);
assert.equal(c, 'c');

exports.b = b;