'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';

class DashboardNavigationItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;
    return(
      <li>
        <Link to={self.props.data.path}>
          {self.props.data.label}
        </Link>
      </li>
    );
  }
}

export default DashboardNavigationItem;
