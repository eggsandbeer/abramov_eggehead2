import React, {PropTypes} from 'react';
import TextInput from './input';

const Form = ({data, onInputChange}) => {

  // console.log(data.name)

  return (
    <form>
    <TextInput
      input_value={data.name}
      name="name"
      onChange={(input_value) => onInputChange(input_value, "name")}
    />
    <TextInput
      input_value={data.occupation}
      name="occupation"
      onChange={(input_value) => onInputChange(input_value, "occupation")}
    />

    </form>
  )


}

export default Form
