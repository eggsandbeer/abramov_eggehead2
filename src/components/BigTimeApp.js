import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import FormWrapper from './FormWrapper';
import Form from './Form';
import Input from './Input';

const BigTimeApp = ({params}) =>
  // console.log(filter)
  // console.log(params)
  <div>
    <p>Come y'\ it'\s time to have fun!!</p>

    <FormWrapper>
      <Form>
        <Input />
        <Input />
        <Input />
      </Form>
    </FormWrapper>


    <Link
      to='/todo'
    >
      TODO
    </Link>
  </div>
// };

export default BigTimeApp;
