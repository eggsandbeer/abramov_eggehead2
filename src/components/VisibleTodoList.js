import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

const mapStateToProps = (state, params) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
});

const VisibleTodoList = connect(
  mapStateToProps,
  {onTodoClick: toggleTodo}
)(TodoList);

export default VisibleTodoList;
