import React from 'react';
import { GrFacebook } from "react-icons/gr";
import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import './../Login/Login.scss';
import './Register.scss';

const Register = () => {
  return (
    <div className="auth-container">
    <div className="login-wrapper shadow-sm">
        <a className='login-logo-link' href="#">
            <img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
        </a>
        <span className='reg-text'>Sign up to see photos and videos from your friends.</span>
        <a className='login-with-fb-register' href="#"><GrFacebook /> Login with Facebook</a>

        <div className="divider">
            OR
        </div>
          
        <form action="" className='login-form'>
            <input type="text" className='login-input' placeholder='Phone Number or Email'/>
            <input type="text" className='login-input' placeholder='First Name'/>
            <input type="text" className='login-input' placeholder='Username'/>
            <input type="text" className='login-input' placeholder='Passwrod'/>
            <br />

            <p className='reg-form-text'>People who use our service may have uplaoded your contact information to Instagram. <a href="">Learn More</a></p>
            <br />
            <p className='reg-form-text'>By Singing up, You agree to our <a href="">Terms</a>, <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a></p>

            <button type="submit" className='submit-btn'>Log In</button>
        </form>


    </div>



    <div className="signup-btn-box">

        <span className='do-not-have-account'>Have an account ? </span> &nbsp;
        <Link to="/login" className='go-signup-page'> Login</Link>
       
    </div>

    <div className="get-app">
        <span className='app-text'>Get the app.</span>
       <div className="app-logo">
            <img className='app-img' src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
            <img className='app-img'  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
       </div>
    </div>
    
    <AuthFooter />

</div>
  )
}

export default Register;