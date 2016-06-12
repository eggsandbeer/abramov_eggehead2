import React, {PropTypes} from 'react';

const Input = ({name, value, onChange}) => (
  <div>
    <input type="text" name={name} value={name} onChange={e => {onChange(e.target.value)}} />
  </div>
)

export default Input;
