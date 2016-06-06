import { combineReducers } from 'redux';
// import todo from './todo';
import byId, * as fromId from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

const todos = combineReducers({
  byId,
  listByFilter
})

export default todos;

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromId.getTodo(state.byId, id));






  // const allTodos = getAllTodos(state);
  //
  // switch (filter) {
  //   case 'all':
  //     return allTodos;
  //   case 'completed':
  //     return allTodos.filter(t => t.completed);
  //   case 'active':
  //     return allTodos.filter(t => !t.completed);
  //   default:
  //     throw new Error(`Unknown filter: ${filter}.`);
  // }
};
