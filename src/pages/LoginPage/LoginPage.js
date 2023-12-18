import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // for redirection after login
import axios from 'axios'; // for making HTTP requests

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with the correct URL of your backend
            const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
            localStorage.setItem('token', response.data.token); // Save the token to localStorage
            history.push('/dashboard'); // Redirect to dashboard or other page
        } catch (err) {
            setError(err.response?.data.message || 'An error occurred');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;