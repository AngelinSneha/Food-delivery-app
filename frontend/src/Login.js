import React, {useState} from 'react'
import { useSpring, animated } from "react-spring"; // react-spring
import "./Login.css";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
function Login() {
    const [registrationFormStatus, setRegistrationFormStatus] = useState(false);

    const loginProps = useSpring({ // animatimg login form
        left: registrationFormStatus ? -500 : 0,
        opacity: registrationFormStatus ? 0: 1
      })
      const registerProps = useSpring({ // animatimg register form
        left: registrationFormStatus ? 0 : 500,
        opacity: registrationFormStatus ? 1: 0
      })
      // animatimg buttons
      const loginBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #000'})
      const registerBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 2px #000' : 'solid 0px transparent'})

    function registerClicked() {
        setRegistrationFormStatus(true);
    }
    function loginClicked() {
        setRegistrationFormStatus(false);
    }

    return (
        <div>
            <h1 className="head">Login to Order</h1>
            <div className="login-register-wrapper">
                <div className="nav-buttons">
                    <animated.button style={loginBtnProps} id="loginBtn" onClick={loginClicked} class="active">Login</animated.button>
                    <animated.button style={registerBtnProps} id="registerBtn" onClick={registerClicked} >Register</animated.button>
                </div>
                <div className="form-group">
                <animated.form action='' id="loginform" style={loginProps}>
                    <LoginForm />
                </animated.form>
                <animated.form action='' id="registerform" style={registerProps}>
                    <RegisterForm />
                </animated.form>
                </div>
                <animated.div id="forgot-panel" style={loginProps}>
                {/* <a href="#">Forgot your password</a> */}
                </animated.div>
            </div>
        </div>
    )
}

export default Login;
