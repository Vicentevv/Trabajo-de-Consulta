// JavaScript using React
import React, { useState } from 'react';

const App = () => {
    const [message, setMessage] = useState('Hello from React!');

    const changeMessage = () => {
        setMessage('New message from React!');
    };

    return (
        <div>
            <p>{message}</p>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    );
};

export default App;