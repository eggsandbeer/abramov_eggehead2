import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router';
import Form from './form';
import { getFormData, getFormErrorMessage, getFormIsFetching } from '../reducers';

class FormWrapper extends Component {
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    // console.log('fetch that data');
    this.props.fetchFormData()

  }
  render() {
    const {errorMessage, isFetching, handleInputChange, data} = this.props;

    if(isFetching){
      return <p>Loading...</p>
    }

    console.log(this.props)

    if (data) {
      return (
        <div>
          <Form
            data={data}
            onInputChange={handleInputChange}
          />
        </div>
      )
    } else {
      return (<div></div>)
    }

  }
}

const mapStateToProps = (state, params) => {
  // const {formData} = state;
  console.log(state)
  // console.log(getFormData(formData))

  return {
    errorMessage: getFormErrorMessage(state),
    isFetching: getFormIsFetching(state),
    data: getFormData(state)
  }
};

FormWrapper = connect(
  mapStateToProps,
  actions
)(FormWrapper);

export default FormWrapper;
