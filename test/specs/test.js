var assert = require('assert');

describe('landing page', function() {
    it('should have the right title', function () {
        browser.url('http://localhost:3000');
        var title = browser.getTitle();
        assert.equal(title, 'Liquidpace Analytics');
        var txt = browser.getText('h1*=APP');
        assert.equal(txt, 'APP TITLE PAGE');
    });

    it('should navigate on click to the proper pages', function () {
      browser.url('http://localhost:3000');
      browser.click('a');
      var txt = browser.getText('h1*=DASHBOARD');
      assert.equal(txt, 'DASHBOARD');
      var txt2 = browser.getText('h1*=HOME');
      assert.equal(txt2, 'HOME VIEW');
      browser.click('a*=Users');
      var txt3 = browser.getText('h1*=USERS');
      assert.equal(txt3, 'USERS VIEW');
      browser.click('a*=Settings');
      var txt3 = browser.getText('h1*=SETTINGS');
      assert.equal(txt3, 'SETTINGS VIEW');
    });
});
