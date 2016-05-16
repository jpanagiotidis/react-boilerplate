'use strict';

import _ from 'underscore';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import { DashboardNavigationItem } from '../components';

class DashboardNavigation extends Component{
  constructor(props){
    super(props);
  }

  getLinks(list, current_path){
    return _.map(list, (obj, i) => {
      return <DashboardNavigationItem key={i} data={obj} current_path={current_path}/>
    });
  }

  render(){
    const self = this;

    return(
      <div className="lp-db-nav-menu">
        <ul>
          {self.getLinks(self.props.links, self.props.pathname)}
        </ul>
      </div>
    );
  }
}

export default branch({
  links: ['dashboard', 'links']
}, DashboardNavigation);
