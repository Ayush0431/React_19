import React, { useState } from 'react';
import './index.css';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const loginData ={
            username , 
            password,
        }
        console.log(loginData);
    }
    return (
        <>
            <h1>My name is login form</h1>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            required
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            required
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};
