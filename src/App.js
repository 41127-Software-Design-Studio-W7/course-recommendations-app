import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';


function App() {
  const adminUser = {
    email:"admin@admin.com",
    password: "admin"
  }

  const [user, setUser] = useState({email: ""})
  const [error, setError] = useState("");
  const [courses, setCourses] = useState({courseNum: "", spec: "", studyYear: ""});

  const Login = details => {
    //console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      //console.log("Logged in");
      setUser({email: details.email})
    } else {
      //console.log("Details do not match");
      setError("Details do not match")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({email: ""});
  }

  const Courses = courseDetails => {
    console.log(courseDetails);
    setCourses({courseNum: courseDetails.courseNum, spec: courseDetails.spec, studyYear: courseDetails.studyYear});
  }


  return (
    <div className="App">
      {(user.email != "") ? ( 
        <InputForm Logout={Logout} Courses={Courses}/>
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
  );
}




export default App;
