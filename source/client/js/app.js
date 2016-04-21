'use strict';

import '../sass/lp.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import {history} from './managers/StateManager.js';
import {
  AppLoader,
  TitleView,
  DashboardView,
  DashboardHome,
  NotFound
} from './components';

render(<AppLoader/>, document.getElementById('app_frame'))

appInit()
.then(() => {
  console.log('APP LOADED SUCCESSFULLY');
})
.catch((err) => {
  console.log(err);
  console.log(err.stack);
});

async function appInit(){
  render(
    <Router history={history}>
      <Route path="/" component={TitleView}/>
      <Route path="dashboard" component={DashboardView}>
        <Route path="/home" component={DashboardHome}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>,
    document.getElementById('app_frame')
  );
}

// <Route path="dashboard" component={DashboardView}>
//   <Route path="/" component={DashboardHomeView}/>
//   <Route path="/settings" component={DashboardSettingsView}/>
// </Route>