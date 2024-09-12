import React from 'react';
import Form from '../../components/Form';
import './LogIn.css';
import img from '../../assets/signup-img.png';

function LogIn() {
  return (
    <div className='signup'>
      <Form formType="login" />
      <div className='img'>
        <img src={img} />
      </div>
    </div>
  );
}

export default LogIn;