import React from 'react'
import { Button } from '@material-ui/core';
import "./LoginForm.css"
function LoginForm() {
    return (
        // <div className="form-group">
            <React.Fragment>
                <label className="l" for='username'>USERNAME</label>
                <input type='text' id='username' />
                <label className="l" for='password'>PASSWORD</label>
                <input type='password' id='password' />
                <Button className='btnLogin' variant="contained" color="#000" href="#">
                    Submit
                </Button>
            </React.Fragment>
        // </div>
    )
}
function fun() {

}
export default LoginForm
