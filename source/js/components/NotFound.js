'use strict';

import React, {Component} from 'react';

class NotFound extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className="lp-app">
        <h1>PAGE NOT FOUND</h1>
      </div>
    );
  }
}

export default NotFound;
