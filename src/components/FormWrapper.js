import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router';
import { getVisibleTodos, getFormErrorMessage, getFormIsFetching } from '../reducers';

class FormWrapper extends Component {
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    // console.log('fetch that data');
    this.props.fetchFormData()

  }
  render() {
    const {errorMessage, isFetching, children} = this.props;

    if(isFetching){
      return <p>Loading...</p>
    }
    return (
      <div>
        Formwrapper
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, params) => {
  const {formData} = state;

  return {
    errorMessage: getFormErrorMessage(formData),
    isFetching: getFormIsFetching(formData),
    data: {
      ...state.formData.data
    }
  }
};

FormWrapper = connect(
  mapStateToProps,
  actions
)(FormWrapper);

export default FormWrapper;
