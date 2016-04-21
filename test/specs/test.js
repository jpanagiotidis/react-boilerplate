var assert = require('assert');

describe('landing page', function() {
    it('should have the right title', function () {
        browser.url('http://localhost:3000');
        var title = browser.getTitle();
        assert.equal(title, 'Liquidpace Analytics');
        var txt = browser.getText('h1*=APP');
        assert.equal(txt, 'APP TITLE PAGE');
    });

    it('should navigate after click to menu', function () {
      browser.url('http://localhost:3000');
      browser.click('a');
      var txt = browser.getText('h1*=DASHBOARD');
      assert.equal(txt, 'DASHBOARD');
      var txt2 = browser.getText('h1*=HOME');
      assert.equal(txt2, 'HOME VIEW');
    });
});
