const byId = (state = {}, action) => {
  // console.log('?')
  console.log(action.response)

  if(action.type === 'FETCH_TODOS_SUCCESS' || action.type === 'ADD_TODO_SUCCESS' ){
    return {
      ...state,
      ...action.response.entities.todos
    }
  }
  return state;
  // switch (action.type) {
  //   case 'FETCH_TODOS_SUCCESS':
  //     const nextState = {...state}
  //     action.response.forEach(todo => {
  //       nextState[todo.id] = todo;
  //     });
  //     return nextState;
  //   case 'ADD_TODO_SUCCESS':
  //     return {
  //       ...state,
  //       [action.response.id]: action.response,
  //     }
  //   default:
  //     return state;
  // }
};

export default byId;

export const getTodo = (state, id) => state[id];
