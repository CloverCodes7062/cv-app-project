import { useState } from 'react'
import './CvEducation.css'

function CvEducation({ 
    duration, 
    collegeLocation, 
    school, 
    degree, 
    eduRenderedValue 
}) {
    return (
        eduRenderedValue ?
        (<div className='main-education-container main-container'>
            <h1 className='section-header'>Education</h1>
            <div className='second-education-container second-container'>
                <div className='left-container subcontainer'>
                    <p id='duration'>{duration}</p>
                    <p id='college-location'>{collegeLocation}</p>
                </div>
                <div className='right-container subcontainer'>
                    <p id='school'>{school}</p>
                    <p id='degree'>{degree}</p>
                </div>
            </div>
        </div>) : null
        
    );
}

export default CvEducation