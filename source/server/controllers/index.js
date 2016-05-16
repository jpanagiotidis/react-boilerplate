'use strict';

const PREFIX = '/api/';

export default function init(router){
  router.post(`${PREFIX}login`, async (ctx) => {
    try {
      ctx.body = 'test';
    } catch (e) {
      throw e;
    }
  });
}
