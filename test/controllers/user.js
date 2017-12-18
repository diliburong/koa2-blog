// const supertest = require('supertest')
// const app = require('../../app.js')
const sum = require('./hello')

const assert = require('assert');


describe('#hello.js', () => {
	before(function () {
		console.log('before:');
	});

	after(function () {
		console.log('after.');
	});

		beforeEach(function () {
			console.log('---beforeEach:');
		});

		afterEach(function () {
			console.log('---afterEach.');
		});

	describe('#sum()', () => {
		it('sum() should return 0', () => {
			assert.strictEqual(sum(), 0);
		});

		it('sum(1) should return 1', () => {
			assert.strictEqual(sum(1), 1);
		});

		it('sum(1, 2) should return 3', () => {
			assert.strictEqual(sum(1, 2), 3);
		});

		it('sum(1, 2, 3) should return 6', () => {
			assert.strictEqual(sum(1, 2, 3), 6);
		});
	});
});

