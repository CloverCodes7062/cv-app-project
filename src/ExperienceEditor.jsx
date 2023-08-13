import { useState } from 'react'
import './ExperienceEditor.css'

function ExperienceInputsContainer(props) {
    return (<div className="inputs-container animate__animated animate__fadeIn">
        <div className="project-name input-container margin-top">
            <p>Experience Name</p>
            <input type="text" value={props.jobName} onChange={props.handleChange(props.onJobNameChange)} className="job-name-input input-form" />
        </div>
        <div className="key-point-1 input-container">
            <p>1st Key Point</p>
            <input type="text" value={props.keyPt1} onChange={props.handleChange(props.onKeyPt1Change)} className="key-point-1-input input-form" />
        </div>
        <div className="key-point-2 input-container">
            <p>2nd Key Point</p>
            <input type="text" value={props.keyPt2} onChange={props.handleChange(props.onKeyPt2Change)} className="key-point-2-input input-form" />
        </div>
        <div className="key-point-3 input-container">
            <p>3rd Key Point</p>
            <input type="text" value={props.keyPt3} onChange={props.handleChange(props.onKeyPt3Change)} className="key-point-30-input input-form" />
        </div>
    </div>);
}

function ExperienceEditor(props) {

    const {
        experienceRenderedValue,
        onTrashClick,
        onUndoClick,
        firstJobName,
        secondJobName,
        thirdJobName,
        firstJobKeyPt1,
        firstJobKeyPt2,
        firstJobKeyPt3,
        secondJobKeyPt1,
        secondJobKeyPt2,
        secondJobKeyPt3,
        thirdJobKeyPt1,
        thirdJobKeyPt2,
        thirdJobKeyPt3,
        onFirstJobNameChange,
        onFirstJobKeyPt1Change,
        onFirstJobKeyPt2Change,
        onFirstJobKeyPt3Change,
        onSecondJobNameChange,
        onSecondJobKeyPt1Change,
        onSecondJobKeyPt2Change,
        onSecondJobKeyPt3Change,
        onThirdJobNameChange,
        onThirdJobKeyPt1Change,
        onThirdJobKeyPt2Change,
        onThirdJobKeyPt3Change,
        firstJobRenderedValue,
        secondJobRenderedValue,
        thirdJobRenderedValue,
        onFirstJobTrashClick,
        onFirstJobUndoClick,
        onSecondJobTrashClick,
        onSecondJobUndoClick,
        onThirdJobTrashClick,
        onThirdJobUndoClick
    } = props;

    const handleChange = (changeFunction) => (event) => {
        changeFunction(event.target.value);
    };

    const [firstJobExpanded, setFirstJobExpanded] = useState(false);
    const [secondJobExpanded, setSecondJobExpanded] = useState(false);
    const [thirdJobExpanded, setThirdJobExpanded] = useState(false);

    const toggleFirstJobExpanded = () => {
        setFirstJobExpanded(!firstJobExpanded);
    };

    const toggleSecondJobExpanded = () => {
        setSecondJobExpanded(!secondJobExpanded);
    };

    const toggleThirdJobExpanded = () => {
        setThirdJobExpanded(!thirdJobExpanded);
    };

    const [expanded, setExpanded] = useState.apply(false)

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const firstJobInputsContainerProps = {
        onJobNameChange: onFirstJobNameChange,
        onKeyPt1Change: onFirstJobKeyPt1Change,
        onKeyPt2Change: onFirstJobKeyPt2Change,
        onKeyPt3Change: onFirstJobKeyPt3Change,
        jobName: firstJobName,
        keyPt1: firstJobKeyPt1,
        keyPt2: firstJobKeyPt2,
        keyPt3: firstJobKeyPt3,
        handleChange,
    };

    const secondJobInputsContainerProps = {
        jobName: secondJobName,
        keyPt1: secondJobKeyPt1,
        keyPt2: secondJobKeyPt2,
        keyPt3: secondJobKeyPt3,
        onJobNameChange: onSecondJobNameChange,
        onKeyPt1Change: onSecondJobKeyPt1Change,
        onKeyPt2Change: onSecondJobKeyPt2Change,
        onKeyPt3Change: onSecondJobKeyPt3Change,
        handleChange,
    };

    const thirdJobInputsContainerProps = {
        jobName: thirdJobName,
        keyPt1: thirdJobKeyPt1,
        keyPt2: thirdJobKeyPt2,
        keyPt3: thirdJobKeyPt3,
        onJobNameChange: onThirdJobNameChange,
        onKeyPt1Change: onThirdJobKeyPt1Change,
        onKeyPt2Change: onThirdJobKeyPt2Change,
        onKeyPt3Change: onThirdJobKeyPt3Change,
        handleChange,
    };

    return(
        <div className='coursework-editor-container editor-container-reusable'>
            <h1>
                <i 
                className="fa-solid fa-hourglass">
                </i>
                {" Experience "}
                <i className={`fas ${expanded ? 'fa-caret-up' : 'fa-caret-down'}`} 
                onClick={toggleExpanded}>
                </i>
                {" "}
                <i className={`fa-solid ${experienceRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} onClick={experienceRenderedValue ? onTrashClick : onUndoClick}></i>
            </h1>
            {expanded ?
            <div className="jobs-container reusable-main-grouping-container animate__animated animate__fadeIn">

                {/* FIRST JOB CONTAINER */}
                <div className="first-job-container reusable-secondary-grouping-container">
                    <h1 
                    className='first-job-header job-header reusable-grouping-header'>
                        {"First Experience "}
                        <i 
                        onClick={toggleFirstJobExpanded} 
                        className={`fas ${firstJobExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                        {" "}
                        <i 
                        className={`fa-solid ${firstJobRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} 
                        onClick={firstJobRenderedValue ? onFirstJobTrashClick : onFirstJobUndoClick}>     
                        </i>
                    </h1>
                    { firstJobExpanded ?
                    <ExperienceInputsContainer
                    {...firstJobInputsContainerProps}
                    />
                    : null }
                </div>

                {/* SECOND JOB CONTAINER */}
                <div className="second-job-container reusable-secondary-grouping-container">
                    <h1 
                    className='second-job-header job-header reusable-grouping-header'>
                        {"Second Experience "}
                        <i 
                        onClick={toggleSecondJobExpanded} 
                        className={`fas ${secondJobExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                        {" "}
                        <i 
                        className={`fa-solid ${secondJobRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} 
                        onClick={secondJobRenderedValue ? onSecondJobTrashClick : onSecondJobUndoClick}>     
                        </i>
                    </h1>
                    { secondJobExpanded ?
                    <ExperienceInputsContainer
                    {...secondJobInputsContainerProps}
                    />
                    : null }
                </div>

                {/* THIRD JOB CONTAINER */}
                <div className="third-job-container reusable-secondary-grouping-container">
                    <h1 
                    className='third-job-header job-header reusable-grouping-header'>
                        {"Third Experience "}
                        <i 
                        onClick={toggleThirdJobExpanded} 
                        className={`fas ${thirdJobExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                        {" "}
                        <i 
                        className={`fa-solid ${thirdJobRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} 
                        onClick={thirdJobRenderedValue ? onThirdJobTrashClick : onThirdJobUndoClick}>     
                        </i>
                    </h1>
                    { thirdJobExpanded ?
                    <ExperienceInputsContainer
                    {...thirdJobInputsContainerProps}
                    />
                    : null }
                </div>
            </div>
            : null}
        </div>
    );
}

export default ExperienceEditor