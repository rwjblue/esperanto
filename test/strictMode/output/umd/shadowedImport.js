(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('foo')) :
	typeof define === 'function' && define.amd ? define(['foo'], factory) :
	factory(global._foo)
}(this, function (_foo) { 'use strict';

	_foo.a();
	(function () {
		var foo = 'bar';
		_foo.a();
	}())

}));