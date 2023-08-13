import { useState } from 'react'
import './EducationEditor.css'

function EducationInputsContainer(props) {
    return (<div className='education-inputs-container inputs-container animate__animated animate__fadeIn'>
        <div className='school-container input-container'>
            <p>School</p>
            <input type="text" value={props.school} onChange={props.handleChange(props.onSchoolChange)} className='school input-form' />
        </div>
        <div className='degree-container input-container'>
            <p>Degree</p>
            <input type="text" value={props.degree} onChange={props.handleChange(props.onDegreeChange)} className='degree input-form' />
        </div>
        <div className='start-date-container input-container'>
            <p>Start Date to End Date</p>
            <input type="text" value={props.duration} onChange={props.handleChange(props.onDurationChange)} className='state-date input-form' />
        </div>
        <div className='location-container input-container'>
            <p>Location</p>
            <input type="text" value={props.location} onChange={props.handleChange(props.onLocationChange)} className='location input-form' />
        </div>
    </div>);
}


function EducationEditor({ school, onSchoolChange, degree, onDegreeChange, duration, onDurationChange, location, onLocationChange, onTrashClick, eduRenderedValue, onUndoClick }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (changeFunction) => (event) => {
        changeFunction(event.target.value);
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='education-editor-container editor-container-reusable'>
            <h1>
                <i className="fas fa-graduation-cap">
                </i>
                {' Education '}
                <i className={`fas ${expanded ? 'fa-caret-up' : 'fa-caret-down'}`} 
                onClick={toggleExpand}>
                </i>
                {"  "}
                <i className={`fa-solid ${eduRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} onClick={eduRenderedValue ? onTrashClick : onUndoClick}></i>
            </h1>
            {expanded ? (
                <EducationInputsContainer 
                    school={school} 
                    onSchoolChange={onSchoolChange} 
                    degree={degree} onDegreeChange={onDegreeChange} 
                    duration={duration} 
                    onDurationChange={onDurationChange} 
                    location={location} 
                    onLocationChange={onLocationChange}
                    expanded={expanded} 
                    handleChange={handleChange}
                />
            ) : null}
        </div>
    );
}

export default EducationEditor