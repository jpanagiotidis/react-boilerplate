'use strict';

import React, { Component } from 'react';
import { root } from 'baobab-react/higher-order';
import { tree } from '../managers/StateManager.js';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;
    return(self.props.children);
  }
}

export default root(App, tree);
