'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import config from '../../config';
import style from './style.scss';

class TitleView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const self = this;

    return(
      <div className={style.frame}>
        <h1 className={style.title}>{config.STRINGS.GENERIC.TITLE}</h1>
        <Link to="/dashboard">{'Start'}</Link>
      </div>
    );
  }
}

export default TitleView;
