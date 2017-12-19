const assert = require('assert');

const sum = require('./sum');
const readFile = require('./await-read-file.js');

describe('#sum.js', () => {
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

describe('#async await-read-file.js', () => {
    describe('#asyncCalculate()', () => {
        it('#async function', async () => {
            let r = await readFile();
            assert.strictEqual(r, 15);
        });
    });
});