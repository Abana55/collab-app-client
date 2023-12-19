import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // for making HTTP requests

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with the correct URL of your backend
            const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
            localStorage.setItem('token', response.data.token); // Save the token to localStorage
            navigate('/'); // Redirect to dashboard or other page
        } catch (err) {
            setError(err.response?.data.message || 'An error occurred with login');
        }
    };

    return (
        <div className="login-page">
            <h2 className="login-page__title">Login</h2>
            {error && <p className="login-page__error" style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} className="login-page__form">
                <div className="login-page__form-group">
                    <label className="login-page__label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        className="login-page__input"
                    />
                </div>
                <div className="login-page__form-group">
                    <label className="login-page__label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        className="login-page__input"
                    />
                </div>
                <button type="submit" className="login-page__button">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;