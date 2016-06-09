import React from 'react';
import FilterLink from './FilterLink';
import {Link} from 'react-router';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="/todo/all">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="/todo/active">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="/todo/completed">
      Completed
    </FilterLink>
    <br/>
    <Link
      to='/bigtime'
    >
      BIGTIME
    </Link>
  </p>
);

export default Footer;
