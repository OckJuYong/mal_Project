import React from 'react';
import './signup.css';

const Signup = () => {
    return (
        <div className="container">
            <div className='box'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <div className='title'>Welcome!</div>
                <div className="additional-text"> 
                    <p>Enter your details</p>
                    <p>and start journey with us</p>
                </div>
            </div>

            <div className="login">
                <img id="logo" src="#" alt="logo" />
                <h1 style={{ fontSize: '50px' }}>Sign Up</h1>
                <p id="p1">Welcome & Join us by creating a free account !</p>
                
                <div className="sns">
                    <button><img src="google.png" alt="google" /></button>
                    <button><img src="facebook.png" alt="facebook" /></button>
                    <button><img src="twitter.png" alt="twitter" /></button>
                </div>
                <br /><br />
                
                <div className="line">
                    <div className="line-segment"></div>
                    <span>OR</span>
                    <div className="line-segment"></div>
                </div>
            
                <br />
                <form>
                    <div className="first_name_container">
                        <label className="first_name" htmlFor="fname">First name</label><br />
                        <input type="text" id="fname" name="fname" /><br />

                        <label className="first_name" htmlFor="lname">Last name</label><br />
                        <input type="text" id="lname" name="lname" /><br />
                        
                        <label className="first_name" htmlFor="password">Password</label><br />
                        <input type="password" id="password" name="password" /><br />
                        
                        <label className="first_name" htmlFor="confirmPassword">Confirm Password</label><br />
                        <input type="password" id="confirmPassword" name="confirmPassword" /><br />
                    </div>
                </form>

                <div className="checkbox">
                    <input type="checkbox" id="agree" name="agree" value="policy" />
                    <label htmlFor="agree" style={{ color: 'rgb(150,150,150)' }}>
                        By creating an account you agree to our <a href="#">Privacy Policy</a>
                    </label>
                </div>
                <br />
                <button id="account">Create Account</button>

                <p id="sign">Already have an account? <a href="#">Sign in</a> </p>
            </div>
        </div>
    );
}

export default Signup;
