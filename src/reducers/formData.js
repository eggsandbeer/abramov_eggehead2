import {combineReducers} from 'redux';

const formData = (state = {}, action) => {

  const ids = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_FORMDATA_SUCCESS':

        consoe.log(action.response.result)

        return action.response.result;
      default:
        return state
    }
  }


  const isFetching = (state = false, action ) => {

    console.log(action.type)

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
    isFetching,
    errorMessage
  });
}

export default formData;

export const getFormData = (state) => state;
export const getFormIsFetching = (state) => state.isFetching;
export const getFormErrorMessage = (state) => state.errorMessage;
