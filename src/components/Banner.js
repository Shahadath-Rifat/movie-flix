import React from 'react';
import Button from './Button';


function Banner(props) {
  return (
    <section className="banner">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <Button 
        buttonStyle="primary" 
        buttonText={props.primaryButtonText} 
      />
      <Button 
        buttonStyle="secondary" 
        buttonText={props.secondaryButtonText} 
      />
    </section>
  );
}

export default Banner;

