import React, { useState } from 'react';
import ResetPassword from './ResetPassword';

function LoginForm({ Login, error, reset }) {
    const [details, setDetails] = useState({email: "", password: ""});
    const [isShown, setIsShown] = useState(false);

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    };

    const handleClick = e => {  
        e.preventDefault();
        setIsShown(current => !current);
        console.log(isShown);
    };


  return (
    <form onSubmit={submitHandler} >
        <div>
            <h2>Course Recommendation Login</h2>
            {(error != "") ? (<div className="error">{error}</div>) : "" }
            <div className="form-group">
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Password"/>
            </div>
            <input type="submit" value="Login"/>
            <button class='button' onClick={(handleClick)} name="resetpassword" value="ResetPassword"> Reset Password </button>
            {isShown && (<ResetPassword/>)}
        </div>
    </form>

  )
}

export default LoginForm
