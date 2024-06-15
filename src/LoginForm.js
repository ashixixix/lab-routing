import React, { useState } from 'react';
import "./App.css"

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'student1' && password === 'pass1') {
            onLogin(true);
        }
        else if (username === 'student2' && password === 'pass2') {
            onLogin(true);
        }
        else if (username === 'student3' && password === 'pass3') {
            onLogin(true);
        }
        else {
            alert('Invalid credentials');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
