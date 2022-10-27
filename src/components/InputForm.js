import React, { useState } from 'react';
import Ranking from "./Ranking/Ranking";
import SearchField from "./SearchField/SearchField";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


function InputForm( { Logout, Courses, setCurrentPage } ) {
    const [courses, setCourses] = useState({courseNum: "", spec: "", studyYear: "", completedSubjects:[], areasOfInterest:[], assessmentPreferenceRankings:[]});


    const submitHandler = e => {
      setCurrentPage("recommendations")
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
      

      /*
      Mock Data
      */
      const courses_mock = [
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
          "name": "Mechanical Engineering", 
        },
        {
          "id": 400,
          "name": "Civil Engineering", 
        },
        
      ]
      const possible_courses = ["Software Engineering", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering"]
    

      const handleOnSelectCourse = (item) => {
        setCourses({...courses, courseNum: item});
        console.log(courses);
      };

      const handleOnSelectSpecialisation = (item) => {
        setCourses({...courses, spec: item});
        console.log(courses);
      };
       
      const handleOnSelectYear = (item) => {
        setCourses({...courses, studyYear: item});
        console.log(courses);
      };

      const handleOnUpdateCompleted = (item) => {
        setCourses({...courses, completedSubjects: item});
        console.log(courses);
      };

      const handleOnUpdateAreas = (item) => {
        setCourses({...courses, areasOfInterest: item});
        console.log(courses);
      };

      const handleOnUpdateAssessmentPrefenceRankings = (item) => {
        setCourses({...courses, assessmentPreferenceRankings: item});
        console.log(courses);
      };

      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
            <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
          </>
        )
      }      

  
    return (
    <form onSubmit={submitHandler}>
        <div>

        
            

            <h2>Course Recommendation Input</h2>
            <hr></hr>
            <div className="form-group">
                <div className="formitemheading">
                  Choose Course:
                </div>
                <ReactSearchAutocomplete
                  items={courses_mock}
                  resultStringKeyName="name" // String to display in the results
                  onSelect={handleOnSelectCourse}
                  showIcon={false}
                  styling={{
                    height: "34px",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    boxShadow: "none",
                    hoverBackgroundColor: "lightgreen",
                    fontSize: "12px",
                    zIndex: 3,
                  }}
                />
            </div>
            <div className="form-group">
                <div className="formitemheading">
                    Choose Specialisation:
                </div>
                <ReactSearchAutocomplete
                  items={areas_mock}
                  resultStringKeyName="name" // String to display in the results
                  onSelect={handleOnSelectSpecialisation}
                  showIcon={false}
                  styling={{
                    height: "34px",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    boxShadow: "none",
                    hoverBackgroundColor: "lightgreen",
                    fontSize: "12px",
                    zIndex: 3,
                  }}
                />
            </div>    
            <div className="form-group">
                <div className="formitemheading">
                    Enter Study Year:
                </div>
                <input type="studyYear" name="studyYear" id="studyYear" onChange={e => setCourses({...courses, studyYear: e.target.value})} value={courses.studyYear} placeholder="Year of Study"/>
            </div> 
            <hr></hr>

            <SearchField title="Completed Subjects" allpossiblesuggestions={possible_subs} onUpdateValues={handleOnUpdateCompleted}/>
            <SearchField title="Areas of Interest" allpossiblesuggestions={possible_areas} onUpdateValues = {handleOnUpdateAreas}/>
            <Ranking title="Assessment Type" rankingitems={assessment_areas} updateSelected={handleOnUpdateAssessmentPrefenceRankings}/>
            <hr></hr>
            <input  name="continue" type="submit" value="Continue"/>          
            <button class='button' onClick={(Logout)} name="logout" type="button" value="Logout"> Logout </button>
        </div>
    </form>


  )
}

export default InputForm
