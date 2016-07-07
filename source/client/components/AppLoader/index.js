'use strict';

import React, {Component} from 'react';
import style from './style.scss';

class AppLoader extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className={style.loader}>Loading...</div>
    );
  }
}

export default AppLoader;
