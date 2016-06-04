
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';
import {fetchTodos} from '../api';


class VisibleTodoList extends Component {
  componentDidMount(){
    fetchTodos(this.props.filter)
  }
  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, params) => {
  const filter = params.filter || 'all';
  return {
      todos: getVisibleTodos(state, filter),
      filter
  }
};

VisibleTodoList = connect(
  mapStateToProps,
  {onTodoClick: toggleTodo}
)(VisibleTodoList);

export default VisibleTodoList;
