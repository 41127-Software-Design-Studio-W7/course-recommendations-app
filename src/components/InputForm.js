import React, { useState } from 'react';
import Ranking from "./Ranking/Ranking";
import SearchField from "./SearchField/SearchField";


function InputForm( { Logout, Courses, setCurrentPage } ) {
    const [courses, setCourses] = useState({courseNum: "", spec: "", studyYear: ""});


    const submitHandler = e => {
        e.preventDefault();

    }

    const logoutHandler = e => {
        e.preventDefault();
        setCurrentPage("login");
        Logout();
    }

    /*
    MOCK DATA FOR FORM
    */
    const subjects_mock = [
        { 
          "id": 10000,
          "name": "C Fundamentals",
          "area": "Software Engineering"      
        },
        { 
          "id": 10001,
          "name": "C Intermediate",
          "area": "Software Engineering"      
        },
        
        {
          "id" : 10020,
          "name": "Java Fundamentals",
          "area": "Software Engineering"      
        },
        {
          "id" : 10021,
          "name": "Java Intermediate",
          "area": "Software Engineering"      
        },
        {
          "id": 10030,
          "name": "C# and .NET Fundamentals",
          "area": "Software Engineering"      
        },
        {
          "id" : 10031,
          "name": "Java Intermediate",
          "area": "Software Engineering"      
        },
        {
          "id": 30040,
          "name": "Machine Learning Fundamentals",
          "area": "Data Science"      
        },
        {
          "id" : 30041,
          "name": "Machine Learning Intermediate",
          "area": "Data Science"      
        },
        {
          "id": 20050,
          "name": "Embedded Systems Fundamentals",
          "area": "Electrical Engineering"      
        },
        {
          "id" : 20051,
          "name": "Embedded Systems Intermediate",
          "area": "Electrical Engineering"      
        },
      ]
      const possible_subs = [10000, 10001, 10020, 10021, 10030, 10031, 30040, 30041, 20050, 20051]
      
      /*
      Mock data
      Areas of Interest
      */
      const areas_mock = [
        { 
          "id": 100,
          "name": "Software Engineering"
        },
        {
          "id" : 200,
          "name": "Electrical Engineering"      
        },
        {
          "id": 300,
          "name": "Data Science", 
        }
      ]
      const possible_areas = ["Software Engineering", "Electrical Engineering", "Data Science"]
      
      /*
      Mock data
      Preferences - assessment type
      */
      const assessment_areas = ["Hand In Assignments", "Presentations", "Online Quizzes", "Examinations"]
      


  
    return (
    <form onSubmit={submitHandler}>
        <div>
            <h2>Course Recommendation Input</h2>
            <hr></hr>
            <div className="form-group">
                <input type="courseNum" name="courseNum" id="courseNum" onChange={e => setCourses({...courses, courseNum: e.target.value})} value={courses.courseNum} placeholder="Course Number"/>
            </div>
            <div className="form-group">
                <input type="spec" name="spec" id="spec" onChange={e => setCourses({...courses, spec: e.target.value})} value={courses.spec} placeholder="Specialisation"/>
            </div>    
            <div className="form-group">
                <input type="studyYear" name="studyYear" id="studyYear" onChange={e => setCourses({...courses, studyYear: e.target.value})} value={courses.studyYear} placeholder="Year of Study"/>
            </div> 
            <hr></hr>
            <SearchField title="Completed Subjects" allpossiblesuggestions={possible_subs}/>
            <SearchField title="Areas of Interest" allpossiblesuggestions={possible_areas}/>
            <Ranking title="Assessment Type" rankingitems={assessment_areas} />
            <hr></hr>
            <input  name="continue" type="submit" value="Continue"/>          
            <button class='button' onClick={(Logout)} name="logout" type="submit" value="Logout"> Logout </button>
        </div>
        
    </form>


  )
}

export default InputForm
