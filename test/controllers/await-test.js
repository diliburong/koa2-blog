const assert = require('assert');

const hello = require('./helloA');

describe('#async hello', () => {
  describe('#asyncCalculate()', () => {
    
    // 通过回调方法
    it('#async with done', (done) => {
      (async function () {
        try {
          let r = await hello();
          assert.strictEqual(r, 15);
          done();
        } catch (err) {
          done(err);
        }
      })();
    });


    // 直接把async函数当成同步函数来测试：
    it('#async function', async () => {
      let r = await hello();
      assert.strictEqual(r, 15);
    });

  });
});