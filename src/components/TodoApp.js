import React, {PropTypes} from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const TodoApp = ({filter, params}) => {

  return (<div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter || 'all' }
    />

    <Footer />
  </div>)
};

TodoApp.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default TodoApp;
