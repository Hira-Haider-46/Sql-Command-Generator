import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './Home.css';

function Home() {
    const [inputData, setInputData] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleChange = (e) => {
        setInputData(e.target.value);
    };

    const handleGenerateSQL = async (e) => {
        e.preventDefault();

        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    return (
        <>
            {message && (
                <div className={`message ${messageType}`}>
                    {message}
                </div>
            )}
            <div className="home-container">
                <h1>SQL Command Generator</h1>
                <p>Give a prompt below to create a database in SQL</p>
                <form onSubmit={handleGenerateSQL} className="home-form">
                    <Input
                        type="text"
                        placeholder="Enter text here..."
                        value={inputData}
                        onChange={handleChange}
                        name="inputData"
                    />
                    <Button onClick={handleGenerateSQL}>Generate SQL</Button>
                </form>
            </div>
        </>
    );
}

export default Home;