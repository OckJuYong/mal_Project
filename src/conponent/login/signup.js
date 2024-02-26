import React from 'react';
import './signup.css';

const signup = () => {
    return (
        <div>
            <img id="logo" src="#" alt="logo" />
            <h1>Sign Up</h1>
            <p id="p1">Welcome & Join us by creating a free account !</p>
            
            <button id="google"><img src="#" alt="google" /></button>
            <button id="facebook"><img src="#" alt="facebook" /></button>
            <button id="twitter"><img src="#" alt="twitter" /></button>
            <br /><br />
            <p id="or">----------------- OR -----------------</p>
            <br />
            <form>
                <label htmlFor="fname">First name</label><br />
                <input type="text" id="lname" name="fname" /><br />

                <label htmlFor="lname">Last name</label><br />
                <input type="text" id="lname" name="lname" /><br />
                
                <label htmlFor="lname">Password</label><br />
                <input type="text" id="lname" name="lname" /><br />
                
                <label htmlFor="lname">Confirm Password</label><br />
                <input type="text" id="lname" name="lname" /><br />
            </form>

            <div>
                <input type="checkbox" id="agree" name="agree" value="policy"/>
                <label htmlFor="agree" id="check" style={{ color: 'rgb(150,150,150)' }}>
                    By creating a account you agree to our <a href="#">Privacy Policy</a></label>
            </div>
            <br />
            <button id="account">Create Account</button>

            <p id="sign">Already have an account? <a href="#">Sign in</a> </p>
        </div>
    )
}

export default signup;
