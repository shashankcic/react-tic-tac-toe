import React from 'react';

const Square = ({ value, onClick }) => ( 
  <button onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;