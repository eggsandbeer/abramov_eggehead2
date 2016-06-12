import React, {PropTypes} from 'react';

const TextInput = ({input_value, onChange}) => {
  return(
    <div>
      <input type="text" value={input_value} onChange={e => {onChange(e.target.value)}} />
    </div>
  )
}



export default TextInput;
