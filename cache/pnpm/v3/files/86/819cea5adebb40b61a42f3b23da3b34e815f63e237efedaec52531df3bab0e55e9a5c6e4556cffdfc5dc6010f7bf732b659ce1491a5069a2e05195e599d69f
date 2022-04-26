var stringify = require('./');
var assert = require('chai').assert;
var parse = require('color-parse')

describe('color-stringify', function () {
	it('color-string tests', function () {
		assert.equal(stringify([255, 10, 35], 'hex'), "#ff0a23");

		assert.equal(stringify([255, 10, 35]), "rgb(255, 10, 35)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 1.0]), "rgb(255, 10, 35)");
		assert.equal(stringify([255, 10, 35, 0]), "rgba(255, 10, 35, 0)");

		assert.equal(stringify([280, 40, 60], 'hsl'), "hsl(280, 40%, 60%)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0], 'hsl'), "hsla(280, 40%, 60%, 0)");
		assert.equal(stringify([280, 40, 60], 'hsl'), "hsl(280, 40%, 60%)");

		assert.equal(stringify([280, 40, 60], 'hwb'), "hwb(280, 40%, 60%)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hwb'), "hwb(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hwb'), "hwb(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0], 'hwb'), "hwb(280, 40%, 60%, 0)");

		assert.equal(stringify([255, 255, 0], 'keyword'), "yellow");
		assert.equal(stringify([100, 255, 0], 'keyword'), undefined);

		//short hex
		assert.equal(stringify([0, 255, 255], 'hex'), '#0ff');

		//adobe1,2
		assert.equal(stringify([0, 255, 255], 'adobe1'), 'R:0, G:255, B:255');
		assert.equal(stringify([0, 255, 255], 'adobe2'), '(R0 / G255 / B255)');

		//percent string
		assert.equal(stringify([10, 30, 25], 'percent'), "rgb(4%, 12%, 10%)");
		assert.equal(stringify([10, 30, 25, 0.3], 'percent'), "rgba(4%, 12%, 10%, 0.3)");

		assert.equal(stringify(parse('rgb(180, 15, 0)')), 'rgb(180, 15, 0)')
		assert.equal(stringify(parse('rgba(120, 0, 177, 0.5)')), 'rgba(120, 0, 177, 0.5)')
		assert.equal(stringify(parse('hsla(170, 100%, 30%, 0.8)')), 'hsla(170, 100%, 30%, 0.8)')
	});
});
