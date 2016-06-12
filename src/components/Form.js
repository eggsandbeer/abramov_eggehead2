import React, {PropTypes} from 'react';
import Input from './input';

const Form = ({data, onInputChange}) => {

  console.log(data)

  return (
    <form>
      <Input
        name={data.name}
        value={data.name}
        onChange={(value) => onInputChange(value, data.name)}
      />

    </form>
  )


}

export default Form
