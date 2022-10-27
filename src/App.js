import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import Desktop1 from './components/Desktop1'

function App() {

  /*
  User Data
  */
  const adminUser = {
    email:"admin@admin.com",
    password: "admin"
  }

  


  const [user, setUser] = useState({email: ""})
  const [error, setError] = useState("");
  const [courses, setCourses] = useState({courseNum: "", spec: "", studyYear: ""});
  const [currentPage, setCurrentPage] = useState("login");

  const Login = details => {
    //console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      //console.log("Logged in");
      setUser({email: details.email})
      setCurrentPage("courses")
    } else {
      //console.log("Details do not match");
      setError("Details do not match")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({email: ""});
    setCurrentPage("login")
  }

  const Courses = courseDetails => {
    console.log(courseDetails);
    setCourses({courseNum: courseDetails.courseNum, spec: courseDetails.spec, studyYear: courseDetails.studyYear});
  }


  return (
    <div className="App">
      {
        (() => {
        switch(currentPage)
        {
          case "login": 
            return <LoginForm Login={Login} error={error} setCurrentPage={setCurrentPage}/>;
          case "courses": 
            return <InputForm Logout={Logout} Courses={Courses} setCurrentPage={setCurrentPage}/>;
          case "recommendations": return <Desktop1 setCurrentPage={setCurrentPage} Logout={Logout}/>
        }})()
      }
    </div>
  );
}




export default App;
