import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import './Form.css';

function Form({ formType }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h2>{formType === 'signup' ? 'Sign Up' : 'Login'}</h2>
            <p>Welcome! Please fill in the form to {formType === 'signup' ? 'create an account' : 'access your account'}.</p>
            <form onSubmit={handleSubmit}>
                {formType === 'signup' && (
                    <>
                        <Input
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            name="firstName"
                        />
                        <Input
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            name="lastName"
                        />
                    </>
                )}
                <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
                <Button>{formType === 'signup' ? 'Sign Up' : 'Login'}</Button>
            </form>
        </div>
    );
}

export default Form;