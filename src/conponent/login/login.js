import React from 'react';
import './login.css';

const Login = () => {
    return (
        <>
            <div class="img-container">
            <img src="https://odl.ucsiuniversity.edu.my/shop/assets/images/UCSI_ODL_Logo.png" class="img-file" />
            </div>
            <div class="login-main-container">
                <div class="login-info-container">
                    <div class="login-id-input">
                        <span>ID</span>
                        <input type="text" name="UserName" class="UserName" />
                    </div>
                    <div class="login-pw-input">
                        <span>PW</span>
                        <input type="text" name="UserPassword" class="UserPassword" />
                    </div>
                    <div class="login-button-container">
                        <button class="login-button">LOGIN</button>
                    </div>
                </div>
                <div class="user-join-container">
                    <a href="/signup" class="user-join">회원가입 버튼</a>
                </div>
            </div>
        </>
    )
}

export default Login;
