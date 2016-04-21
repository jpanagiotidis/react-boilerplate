'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';

class TitleView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className="lp-app">
        <h1>APP TITLE PAGE</h1>
        <Link to="dashboard">Start</Link>
      </div>
    );
  }
}

export default TitleView;
