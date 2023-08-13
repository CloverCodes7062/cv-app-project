import { useState } from 'react'
import './CvCoursework.css'

function CvCoursework({ 
    firstCourse, 
    secondCourse, 
    thirdCourse, 
    fourthCourse,
    fifthCourse,
    sixthCourse,
    seventhCourse,
    eighthCourse,
    courseworkRenderedValue,
}) {
    return (
        courseworkRenderedValue ?
        <div className="main-coursework-container main-container">
            <h1 className="section-header">Relevent Coursework Completed</h1>
            <div className='second-coursework-container'>
                {firstCourse ?
                <p>&bull; {firstCourse}</p>
                : null}
                {secondCourse ?
                <p>&bull; {secondCourse}</p>
                : null}
                {thirdCourse ?
                <p>&bull; {thirdCourse}</p>
                : null}
                {fourthCourse ?
                <p>&bull; {fourthCourse}</p>
                : null}
            </div>
            <div className='third-coursework-container'>
                {fifthCourse ?
                <p>&bull; {fifthCourse}</p>
                : null}
                {sixthCourse ?
                <p>&bull; {sixthCourse}</p>
                : null}
                {seventhCourse ?
                <p>&bull; {seventhCourse}</p>
                : null}
                {eighthCourse ?
                <p>&bull; {eighthCourse}</p>
                : null}
            </div>
        </div>
        : null
    );
}

export default CvCoursework