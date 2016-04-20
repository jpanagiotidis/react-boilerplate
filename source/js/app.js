'use strict';

import '../sass/lp.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {AppLoader} from './components';

render(<AppLoader/>, document.getElementById('app_frame'))

moufa()
.then((data) => {
  console.log('YEAH', data);
})
.catch((err) => {
  console.log('ERR', err);
});

async function moufa(){
  console.log('FFFF');
}
