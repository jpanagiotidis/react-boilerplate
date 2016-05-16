'use strict';

import config from './config';
// import { init as initDB } from './models';
import { init as initServer } from './managers/serverManager.js';

init();

async function init(){
  try {
    console.log('STARTING APP');

    // console.log('\tSTARTING DB...');
    // await initDB(config);
    // console.log('\tDB READY.');

    console.log('\tSTARTING SERVER...');
    await initServer();
    console.log('\tSERVER READY.');

    console.log('APP IS READY.');
  } catch (e) {
    console.log(e);
    console.log(e.stack);
  }
}
