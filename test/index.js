import assert from 'assert';

describe('#src/index.js', () => {
  describe('#example', () => {
    it('example component', () => {
      const Example = () => true;

      assert.strictEqual(Example(), true);
    });
  });
});
