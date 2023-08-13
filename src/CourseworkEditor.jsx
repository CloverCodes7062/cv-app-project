import { useState } from 'react'
import './CourseworkEditor.css'

function CourseworkEditor({ 
    firstCourse, 
    secondCourse, 
    thirdCourse, 
    fourthCourse,
    fifthCourse,
    sixthCourse,
    seventhCourse,
    eighthCourse,
    onFirstCourseChange,
    onSecondCourseChange,
    onThirdCourseChange,
    onFourthCourseChange,
    onFifthCourseChange,
    onSixthCourseChange,
    onSeventhCourseChange,
    onEighthCourseChange,
    onTrashClick,
    onUndoClick,
    courseworkRenderedValue,
}) {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (changeFunction) => (event) => {
        changeFunction(event.target.value);
    };

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='coursework-editor-container editor-container-reusable'>
            <h1>
                <i 
                className="fa-solid fa-newspaper">
                </i>
                {" Relevent Coursework "}
                <i className={`fas ${expanded ? 'fa-caret-up' : 'fa-caret-down'}`} 
                onClick={toggleExpanded}>
                </i>
                {" "}
                <i className={`fa-solid ${courseworkRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} onClick={courseworkRenderedValue ? onTrashClick : onUndoClick}></i>
            </h1>
            {expanded ?
            <div className="coursework-inputs-container inputs-container animate__animated animate__fadeIn">
                <div className="first-course input-container">
                    <p>First Course</p>
                    <input type="text" value={firstCourse} onChange={handleChange(onFirstCourseChange)} className="first-course-input input-form"/>
                </div>
                <div className="second-course input-container">
                    <p>Second Course</p>
                    <input type="text" value={secondCourse} onChange={handleChange(onSecondCourseChange)} className="second-course-input input-form"/>
                </div>
                <div className="third-course input-container">
                    <p>Third Course</p>
                    <input type="text" value={thirdCourse} onChange={handleChange(onThirdCourseChange)} className="third-course-input input-form"/>
                </div>
                <div className="fourth-course input-container">
                    <p>Fourth Course</p>
                    <input type="text" value={fourthCourse} onChange={handleChange(onFourthCourseChange)} className="fourth-course-input input-form"/>
                </div>
                <div className="fifth-course input-container">
                    <p>Fifth Course</p>
                    <input type="text" value={fifthCourse} onChange={handleChange(onFifthCourseChange)} className="fifth-course-input input-form"/>
                </div>
                <div className="sixth-course input-container">
                    <p>Sixth Course</p>
                    <input type="text" value={sixthCourse} onChange={handleChange(onSixthCourseChange)} className="sixth-course-input input-form"/>
                </div>
                <div className="seventh-course input-container">
                    <p>Seventh Course</p>
                    <input type="text" value={seventhCourse} onChange={handleChange(onSeventhCourseChange)} className="seventh-course-input input-form"/>
                </div>
                <div className="eighth-course input-container">
                    <p>Eighth Course</p>
                    <input type="text" value={eighthCourse} onChange={handleChange(onEighthCourseChange)} className="eighth-course-input input-form"/>
                </div>
            </div>
            : null}
        </div>
    );
}

export default CourseworkEditor