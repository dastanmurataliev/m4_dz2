import React from 'react';

function AboutUs(props) {

const {product, text} = props
  return (
    <div className='red'>
      <p>About Us</p>
      {props.text}
      -----------
      <ul>
        <li>name:{product?.name}</li>
        <li>address:{product?.address}</li>
        <li>media:{product?.media}</li>
      </ul> 
    </div>
  );
}

export default AboutUs;