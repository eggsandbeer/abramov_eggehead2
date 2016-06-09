import React, {PropTypes} from 'react';
import TodoApp from './TodoApp';

const App = ( {children, params} ) => {
  console.log(params)
  return (<div>
    {children}
  </div>)
};

export default App;
