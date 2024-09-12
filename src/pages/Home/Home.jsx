import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './Home.css';

function Home() {
    const [inputData, setInputData] = useState('');

    const handleChange = (e) => {
        setInputData(e.target.value);
    };

    const handleGenerateSQL = (e) => {
        e.preventDefault();
    };

    return (
        <div className="home-container">
            <h1>SQL Command Generator</h1>
            <p>Enter your data below to create database in SQL:</p>
            <form onSubmit={handleGenerateSQL} className="home-form">
                <Input
                    type="text"
                    placeholder="Enter data here..."
                    value={inputData}
                    onChange={handleChange}
                    name="inputData"
                />
                <Button onClick={handleGenerateSQL}>Generate SQL</Button>
            </form>
            {/* <div className='message success'>
                hello
            </div> */}
        </div>
    );
}

export default Home;