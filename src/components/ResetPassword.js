import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const [oldPass, setNewOldPassword] = useState("1234")
    const [password, setNewPassword] = useState({oldPassword: "", newPassword: "", confirmPassword: ""});


    const submitHandler = e => {
        e.preventDefault();
        console.log(password)

        if(oldPass != password.oldPassword){
            toast("Old password is not matched");
        }else if(password.newPassword === password.confirmPassword ){
            setNewOldPassword(password.confirmPassword);
            toast("Successfully Changed");
        }else if(password.newPassword != password.confirmPassword){
            toast("Confirm password isn't matched with New password");
        }
    }

    const notify = () => toast("Homepage Button Clicked!!");

    const homepageHandler = e => {
        e.preventDefault();
        notify();
    }
  
    return (
    <form onSubmit={submitHandler}>
        <div>
            <h2>Reset your password</h2>
            <div className="form-group">
                <input type="oldPassword" name="oldPassword" id="oldPassword" onChange={e => setNewPassword({...password, oldPassword: e.target.value})} value={password.oldPassword} placeholder="Old Password"/>
            </div>
            <div className="form-group">
                <input type="newPassword" name="newPassword" id="newPassword" onChange={e => setNewPassword({...password, newPassword: e.target.value})} value={password.newPassword} placeholder="New Password"/>
            </div>    
            <div className="form-group">
                <input type="confirmPassword" name="confirmPassword" id="confirmPassword" onChange={e => setNewPassword({...password, confirmPassword: e.target.value})} value={password.confirmPassword} placeholder="Confirm Password"/>
            </div> 
            <div className="form-group">
                <input name="resetPass" type="submit" value="Reset Password"/>   
            </div> 
            <button class='largeButton' onClick={homepageHandler} name="homePage" value="homepage"> HomePage </button>
            <ToastContainer />
        </div>
    </form>


  )
}

export default ResetPassword
