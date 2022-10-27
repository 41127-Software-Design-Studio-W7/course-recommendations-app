import React, { useState } from 'react'
import './Desktop1.css'
export default function Desktop1 ({setCurrentPage, Logout}) {
	
	const backHandler = e => {
		setCurrentPage("courses");
		e.preventDetault();
	}

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

	  let subject_indexes = [];
	  while(subject_indexes.length<4){
		let random_num = Math.floor(Math.random()*subjects_mock.length)

		if(subject_indexes.includes(random_num)){
			continue;
		} else{
			subject_indexes.push(random_num);
		}
	  }

	return (
		<div className='Desktop1_Desktop1'>
			<div className='Group1'>
				<div className='Rectangle1'/>
				<span className='Subject_0'>{subjects_mock[subject_indexes[0]].name}</span>
			</div>
			<div className='Group2'>
				<div className='Rectangle2'/>
				<span className='Subject_1'>{subjects_mock[subject_indexes[1]].name}</span>
			</div>
			<div className='Group3'>
				<div className='Rectangle3'/>
				<span className='Subject_2'>{subjects_mock[subject_indexes[2]].name}</span>
			</div>
			<div className='Group4'>
				<div className='Rectangle4'/>
				<span className='Subject_3'>{subjects_mock[subject_indexes[3]].name}</span>
			</div>
			<div className='Rectangle5'/>
			<span className='Course'>Course</span>
			<div className='Rectangle6'/>
			<span className='Back' onClick={backHandler}>Back</span>
			<div className='Rectangle7'/>
			<span className='LogOut'onClick={Logout}>Log Out</span>
			<div className='Rectangle8'/>
			<span className='Specialization'>Specialization</span>
			<div className='Rectangle9'/>
			<span className='YearofStudy'>Year of Study</span>
			<div className='Group5'>
				<div className='Rectangle10'/>
				<span className='YearofStudy_1'>Year “” of Study</span>
			</div>
			<div className='Group6'>
				<div className='Rectangle11'/>
				<span className='Year1ofStudy'>Year “-1” of Study</span>
			</div>
			<div className='Group7'>
				<div className='Rectangle12'/>
				<span className='Year1ofStudy'>Year “+1” of Study</span>
			</div>
		</div>
	)
}