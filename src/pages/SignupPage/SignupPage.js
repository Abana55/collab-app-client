import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.scss';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validation: Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await axios.post('http://localhost:8000/api/auth/register', formData);
            navigate('/profile'); // Navigate to profile page after successful signup
        } catch (err) {
            setError(err.response?.data.message || 'An error occurred during signup');
        }
    };

    return (
        <div className="signup-page">
            <div className='signup-page__box'>
            <h2 className="signup-page__title">Sign Up</h2>
            {error && <p className="signup-page__error" style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} className="signup-page__form">
                <input
                    type="text"
                    name="username"
                    className="signup-page__input"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="signup-page__input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="signup-page__input"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    className="signup-page__input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                />
                <button type="submit" className="signup-page__button">Sign Up</button>
            </form>
            </div>
        </div>
    );
};

export default SignupPage;