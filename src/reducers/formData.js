import {combineReducers} from 'redux';

const formData = (state = {}, action) => {

  const data = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_FORMDATA_SUCCESS':
        return action.response;
      case 'FORM_CHANGE_INPUT':
        const { key_name, value } = action;

        console.log(state)

        console.log(key_name)
        console.log(value)

        const new_state = state;

        return state[key_name] = value;
        console.log(new_state)
        return new_state;
      default:
        return state
    }
  }

  const isFetching = (state = false, action ) => {
    switch (action.type) {
      case 'FETCH_FORMDATA_REQUEST':
        return true;
      case 'FETCH_FORMDATA_SUCCESS':
      case 'FETCH_FORMDATA_FAILURE':
        return false;
      default:
        return state;
    }
  }

  const errorMessage = (state = null, action) => {

    switch (action.type) {
      case 'FETCH_FORMDATA_FAILURE':
        return action.message;
      case 'FETCH_FORMDATA_SUCCESS':
      case 'FETCH_FORMDATA_REQUEST':
        return null;
      default:
        return state;
    }
  }

  return combineReducers({
    data,
    isFetching,
    errorMessage
  });
}

export default formData;

export const getFormData = (state) => state.formData.data;
export const getFormIsFetching = (state) => state.formData.isFetching;
export const getFormErrorMessage = (state) => state.formData.errorMessage;
