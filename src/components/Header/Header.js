import React from 'react';
import logo from '../../images/logo2.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    let navigate = useNavigate();

    const btnLogin = () => {
        navigate('/login');
    }

    const btnSignup = () => {
        navigate('/signup');
    }
    return (
        <nav className='navbar sticky-top bg-white'>
            <div className='container'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='btn-grp'>
                    <p className='pt-2'><AiOutlineShoppingCart /></p>
                    {
                        user ?
                            <button className='signup' onClick={handleSignOut}>sign out</button>
                            :
                            <div>
                                <button onClick={btnLogin}>Login</button>
                                <button onClick={btnSignup} className='signup'>Sign up</button>
                            </div>
                    }
                </div>
            </div>

        </nav>
    );
};

export default Header;