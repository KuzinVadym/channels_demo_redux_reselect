import React from 'react';

import style from "./base.css";
import Favorites from '../../containers/Favorites';
import Chanels from '../../containers/Chanels';

const Base = ({}) => {
  return (
    <div className={style.base}>
      <Favorites />
      <Chanels />
    </div>
  )
}

export default Base;