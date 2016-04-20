'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';

class DashboardView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className="lp-app">
        <h1>DASHBOARD</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default DashboardView;
