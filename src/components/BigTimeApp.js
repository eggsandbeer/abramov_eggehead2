import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BigTimeApp = ({params}) => {
  // console.log(filter)
  console.log(params)
  return (<div>
    <p>Come y'\ it'\s time to have fun!!</p>
    <Link
      to='/todo'
    >
      TODO
    </Link>
  </div>)
};

export default BigTimeApp;
