'use strict';

import React, {Component} from 'react';

class AppLoader extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className="lp-loader">
        <h1>{'Loading'}</h1>
      </div>
    );
  }
}

export default AppLoader;
