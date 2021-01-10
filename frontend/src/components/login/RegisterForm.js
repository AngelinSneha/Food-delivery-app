import React from 'react'
function RegisterForm() {
    return (
        // <div className="form-group">
            <React.Fragment>
                <label className="l" for="username">Full Name</label>
                <input type="text" id="username" />
                <label className="l" for="email">Email</label>
                <input type="text" id="email" />
                <label className="l" for="password">Password</label>
                <input type="password" id="password" />
                <label className="l" for="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" />
                <label className="l" for="address">Address</label>
                <input type="text" id="address" />
                <label className="l" for="pincode">Pincode</label>
                <input type="text" id="pincode" />
                <input type='submit' value='submit' className='submit' />     
            </React.Fragment>
        // </div>
    )
}

export default RegisterForm
