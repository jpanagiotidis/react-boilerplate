'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import style from './style.scss';

class DashboardNavigationItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;
    const classes = [];

    if(self.props.current_path === self.props.data.path){
      classes.push(style.active);
    }

    return(
      <li className={classes.join(' ')}>
        <Link to={self.props.data.path}>
          {self.props.data.label}
        </Link>
      </li>
    );
  }
}

export default DashboardNavigationItem;
