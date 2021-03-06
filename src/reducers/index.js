import { combineReducers } from 'redux';
// import todo from './todo';
import byId, * as fromId from './byId';
import createList, * as fromList from './createList';
import formData, * as formDataFuncs from './formData';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const index = combineReducers({
  byId,
  listByFilter,
  formData : formData()
});

export default index;

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromId.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])

export const getFormData = (state) =>
  formDataFuncs.getFormData(state.formData)

export const getFormErrorMessage = (state) =>
  formDataFuncs.getFormErrorMessage(state.formData)

export const getFormIsFetching = (state) =>
  formDataFuncs.getFormIsFetching(state.formData)
