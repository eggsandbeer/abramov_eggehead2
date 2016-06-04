
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';
import {fetchTodos} from '../api';

class VisibleTodoList extends Component {
  componentDidMount(){
    this.fetchData();
  }
  componentDidUpdate(prevProps){
    if(this.props.filter !== prevProps.filter){
      this.fetchData()
    }
  }
  fetchData(){
    const {filter, receiveTodos} = this.props;
    fetchTodos(filter).then(todos =>
      this.props.receiveTodos(filter, todos)
    );
  }
  render() {
    const {toggleTodo, ...rest} = this.props;
    return <TodoList
      {...rest}
      onTodoClick={toggleTodo}
    />;
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
  actions
)(VisibleTodoList);

export default VisibleTodoList;
