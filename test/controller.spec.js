import chai from 'chai';
import path from 'path';

const mochaHigherOrderAsync = (fn) => {
    return async (done) => {
        try {
            await fn();
            done();
        } catch (err) {
            done(err);
        }
    };
};

chai.should();

describe('TEST', async () => {

  beforeEach(() => {
    //nothing for now
  });

  describe('#checkers', async () => {

    it('a test', mochaHigherOrderAsync(async () => {
      const result = 'ok';
      result.should.be.a('string');
      result.should.equal('ok');
    }));

  });
});
