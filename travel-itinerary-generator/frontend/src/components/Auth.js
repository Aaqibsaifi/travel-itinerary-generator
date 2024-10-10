import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: white;
`;

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const register = async () => {
        await axios.post('http://localhost:5000/api/users/register', { name, email, password });
        alert('User registered successfully');
    };

    const login = async () => {
        const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
        localStorage.setItem('token', response.data.token);
        alert('User logged in successfully');
    };

    return (
        <Container>
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            {!isLogin && <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />}
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={isLogin ? login : register}>{isLogin ? 'Login' : 'Register'}</button>
            <button onClick={() => setIsLogin(!isLogin)}>Switch to {isLogin ? 'Register' : 'Login'}</button>
        </Container>
    );
};

export default Auth;
