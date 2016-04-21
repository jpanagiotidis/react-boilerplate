const assert = require('assert');

const webdriverHigherOrderAsync = (fn) => {
    return async (done) => {
        try {
            await fn();
            done();
        } catch (err) {
            done(err);
        }
    };
};

describe('landing page', function() {
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'Liquidpace Analytics');
        var txt = browser.getText('h1*=APP');
        assert.equal(txt, 'APP TITLE PAGE');
    });

    it('should navigate on click to the proper pages', function () {
      browser.url('/');
      browser.click('a');
      const txt = browser.getText('h1*=DASHBOARD');
      assert.equal(txt, 'DASHBOARD');
      const txt2 = browser.getText('h1*=HOME');
      assert.equal(txt2, 'HOME VIEW');
      browser.click('a*=Users');
      const txt3 = browser.getText('h1*=USERS');
      assert.equal(txt3, 'USERS VIEW');
      browser.click('a*=Settings');
      const txt4 = browser.getText('h1*=SETTINGS');
      assert.equal(txt4, 'SETTINGS VIEW');
    });


});
