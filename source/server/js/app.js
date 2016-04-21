'use strict';

const port = 3000;
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const convert = require('koa-convert');
const send = require('koa-send');
const router = new Router();
const app = new Koa();
const _use = app.use;
app.use = (x) => _use.call(app, convert(x));
app.use(serve('./build'));

const server = app.listen(port, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('liquidpace analytics listening at http://%s:%s', host, port);
});

router.get('*', async (ctx) => {
  await send(ctx, './build/index.html');
});

app.use(router.routes());
