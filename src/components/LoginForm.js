import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

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
        </div>
    </form>

  )
}

export default LoginForm
