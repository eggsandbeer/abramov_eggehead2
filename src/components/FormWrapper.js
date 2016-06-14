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
    this.props.fetchFormData()
  }
  render() {
    const {errorMessage, isFetching, handleInputChange, data} = this.props;

    if(isFetching){
      return <p>Loading...</p>
    }
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

const mapStateToProps = (state) => {
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
