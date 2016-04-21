'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';

class DashboardNavigation extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className="lp-db-nav-menu">
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default DashboardNavigation;
