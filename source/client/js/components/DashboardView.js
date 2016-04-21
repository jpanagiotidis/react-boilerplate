'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';
import {DashboardNavigation} from '../components';

class DashboardView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className="lp-app">
        <h1>DASHBOARD</h1>
        <div>
          {self.props.children}
        </div>
        <DashboardNavigation pathname={self.props.location.pathname}/>
      </div>
    );
  }
}

export default DashboardView;
