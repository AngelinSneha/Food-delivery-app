import React from 'react'
import "./LoginForm.css"
function LoginForm() {
    return (
        // <div className="form-group">
            <React.Fragment>
                <label className="l" for='username'>USERNAME</label>
                <input type='text' id='username' />
                <label className="l" for='password'>PASSWORD</label>
                <input type='password' id='password' />
                <input type='submit' value='submit' className='submit' />
            </React.Fragment>
        // </div>
    )
}
function fun() {

}
export default LoginForm
