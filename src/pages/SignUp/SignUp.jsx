import React from 'react';
import Form from '../../components/Form';
import img from '../../assets/signup-img.png';
import './SignUp.css';

function SignUp() {
  return (
    <div className='signup'>
      <Form formType="signup" />
      <div className='img'>
        <img src={img}/>
      </div>
    </div>
  )
}

export default SignUp;