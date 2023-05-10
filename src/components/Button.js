
import React from 'react';

function Button(props) {
  const buttonClasses = props.buttonStyle === 'primary' 
    ? 'btn-primary' 
    : 'btn-secondary';

  return (
    <button className={buttonClasses}>{props.buttonText}</button>
  );
}

export default Button;
