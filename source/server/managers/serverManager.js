'use strict';

import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import convert from 'koa-convert';
import send from 'koa-send';
import bodyParser from 'koa-bodyparser';

import controllers from '../controllers';

const port = process.env.PORT || 3000;
let router;
let app;
let server;

export function init(){
  return new Promise((resolve, reject) => {
    router = new Router();
    app = new Koa();

    const _use = app.use;
    app.use = (x) => _use.call(app, convert(x));

    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        ctx.status = e.status || e.statusCode || 500;
        ctx.body = {
          "message": e.message
        };
      }
    });

    app.use(bodyParser());
    app.use(serve('./build'));

    controllers(router);

    router.get('*', async (ctx) => {
      await send(ctx, './build/index.html');
    });

    app.use(router.routes());

    server = app.listen(port, function () {
      let host = server.address().address;
      let port = server.address().port;
      console.log('\t\tserver listening at http://%s:%s', host, port);
      resolve();
    });
  });
}
