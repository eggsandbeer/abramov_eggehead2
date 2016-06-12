import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router';
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers';

class FormWrapper extends Component {
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    console.log('fetch that data');
    this.props.fetchFormData()

  }
  render() {
    return (
      <div>
        Formwrapper
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state, params) => {

  console.log(state, params)

  return {
  }
};

FormWrapper = connect(
  mapStateToProps,
  actions
)(FormWrapper);

export default FormWrapper;
