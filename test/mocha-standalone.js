import chai, { assert } from 'chai';
const webdriverio = require('./../node_modules/webdriverio/build');

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

describe('my webdriverio tests', function(done){

    let client = {};
    client =  webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
    client.init(done);

    it('Github test',mochaHigherOrderAsync(async () => {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark').then(function (result) {
                assert.strictEqual(result.height , 26);
                assert.strictEqual(result.width, 89);
            })
            .getTitle().then(function (title) {
                assert.strictEqual(title,'GitHub · Where software is built');
            })
            .getCssProperty('a[href="/plans"]', 'color').then(function (result) {
                assert.strictEqual(result.value, 'rgba(64,120,192,1)');
            });
    }));

    after(() => {
        client.end();
    });
});
