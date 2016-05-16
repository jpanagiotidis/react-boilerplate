'use strict';

import './sass/lp.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import {history} from './store';
import {
  AppLoader,
  App,
  TitleView,
  DashboardView,
  DashboardHome,
  DashboardUsers,
  DashboardSettings,
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
      <Route component={App} path="/">
        <IndexRoute component={TitleView}/>
        <Route component={DashboardView} path="dashboard">
          <IndexRoute component={DashboardHome}/>
          <Route component={DashboardUsers} path="users"/>
          <Route component={DashboardSettings} path="settings"/>
        </Route>
        <Route component={NotFound} path="*"/>
      </Route>
    </Router>,
    document.getElementById('app_frame')
  );
}
