import React from 'react';
import FilterLink from './FilterLink';

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
  </p>
);

export default Footer;
