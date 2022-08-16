import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleNameBlur = event => {
        setEmail(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/breakfast');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='App'>
            <div className='w-25 mx-auto'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='mb-3'>
                        <input className='form-control bg-light' onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Name' required />
                    </div>
                    <div className='mb-3'>
                        <input className='form-control bg-light' onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                    </div>
                    <div className='mb-3'>
                        <input className='form-control bg-light' onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                    </div>
                    <div className='mb-3'>
                        <input className='form-control bg-light' onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" placeholder='Confirm Password' id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-control bg-danger text-white' type="submit" value="Sign Up" required />
                </form>
                <p>
                    Already Have an account? <Link className='form-link text-danger' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;