'use strict';

import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import {tree} from '../../store';
import style from './style.scss';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;
    return(
      <div className={style.frame}>
        {self.props.children}
      </div>
    );
  }
}

export default root(tree, App);
