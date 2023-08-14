import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../Components/Data/Database';
import './LogIn.css';

function Login({ setIsAuth }) {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/');
        });
    };
    return (
        <div className="loginPage">
            <h4>Sign In with Goolgle to Continue</h4>
            <button className="buttonLogIn" onClick={signInWithGoogle}>
                LogIn
            </button>
        </div>
    );
}

export default Login;
