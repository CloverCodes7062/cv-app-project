import { useState } from 'react'
import './ProjectsEditor.css'



function ProjectInputsContainer(props) {
    return (<div className="inputs-container animate__animated animate__fadeIn">
        <div className="project-name input-container margin-top">
            <p>Project Name</p>
            <input type="text" value={props.projectName} onChange={props.handleChange(props.onProjectNameChange)} className="project-name-input input-form" />
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


function ProjectsEditor(props) {

    const {
        onFirstProjectTrashClick,
        firstProjectRenderedValue,
        onFirstProjectUndoClick,
        projectRenderedValue,
        onTrashClick,
        onUndoClick,
        onFirstProjectNameChange,
        onFirstProjectKeyPt1Change,
        onFirstProjectKeyPt2Change,
        onFirstProjectKeyPt3Change,
        firstProjectName,
        firstProjectKeyPt1,
        firstProjectKeyPt2,
        firstProjectKeyPt3,
        secondProjectName,
        secondProjectKeyPt1,
        secondProjectKeyPt2,
        secondProjectKeyPt3,
        onSecondProjectNameChange,
        onSecondProjectKeyPt1Change,
        onSecondProjectKeyPt2Change,
        onSecondProjectKeyPt3Change,
        secondProjectRenderedValue,
        onSecondProjectTrashClick,
        onSecondProjectUndoClick,
        thirdProjectName,
        thirdProjectKeyPt1,
        thirdProjectKeyPt2,
        thirdProjectKeyPt3,
        onThirdProjectNameChange,
        onThirdProjectKeyPt1Change,
        onThirdProjectKeyPt2Change,
        onThirdProjectKeyPt3Change,
        thirdProjectRenderedValue,
        onThirdProjectTrashClick,
        onThirdProjectUndoClick,
    } = props;

    const handleChange = (changeFunction) => (event) => {
        changeFunction(event.target.value);
    };

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const [firstProjectExpanded, setFirstProjectExpanded] = useState(false);
    const [secondProjectExpanded, setSecondProjectExpanded] = useState(false);
    const [thirdProjectExpanded, setThirdProjectExpanded] = useState(false);

    const toggleFirstProjectExpanded = () => {
        setFirstProjectExpanded(!firstProjectExpanded);
    };

    const toggleSecondProjectExpanded = () => {
        setSecondProjectExpanded(!secondProjectExpanded);
    };

    const toggleThirdProjectExpanded = () => {
        setThirdProjectExpanded(!thirdProjectExpanded);
    };

    const firstProjectInputsContainerProps = {
        onProjectNameChange: onFirstProjectNameChange,
        onKeyPt1Change: onFirstProjectKeyPt1Change,
        onKeyPt2Change: onFirstProjectKeyPt2Change,
        onKeyPt3Change: onFirstProjectKeyPt3Change,
        projectName: firstProjectName,
        keyPt1: firstProjectKeyPt1,
        keyPt2: firstProjectKeyPt2,
        keyPt3: firstProjectKeyPt3,
        handleChange,
    };

    const secondProjectInputsContainerProps = {
        projectName: secondProjectName,
        keyPt1: secondProjectKeyPt1,
        keyPt2: secondProjectKeyPt2,
        keyPt3: secondProjectKeyPt3,
        onProjectNameChange: onSecondProjectNameChange,
        onKeyPt1Change: onSecondProjectKeyPt1Change,
        onKeyPt2Change: onSecondProjectKeyPt2Change,
        onKeyPt3Change: onSecondProjectKeyPt3Change,
        handleChange,
    };

    const thirdProjectInputsContainerProps = {
        projectName: thirdProjectName,
        keyPt1: thirdProjectKeyPt1,
        keyPt2: thirdProjectKeyPt2,
        keyPt3: thirdProjectKeyPt3,
        onProjectNameChange: onThirdProjectNameChange,
        onKeyPt1Change: onThirdProjectKeyPt1Change,
        onKeyPt2Change: onThirdProjectKeyPt2Change,
        onKeyPt3Change: onThirdProjectKeyPt3Change,
        handleChange,
    };

    return (
        <div className="projects-editor-container editor-container-reusable">
            <h1><i className="fa-solid fa-pencil"></i>{" Projects "}<i className={`fas ${expanded ? 'fa-caret-up' : 'fa-caret-down'}`} onClick={toggleExpand}></i>{"  "}<i className={`fa-solid ${projectRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} onClick={projectRenderedValue ? onTrashClick : onUndoClick}></i></h1>
            {expanded ?
            <div className="projects-container reusable-main-grouping-container animate__animated animate__fadeIn">

                {/* FIRST PROJECT CONTAINER */}
                <div className="third-project-container reusable-secondary-grouping-container">
                    <h1 
                    className='third-project-header project-header reusable-grouping-header'>
                        {"Project 1 "}
                        <i 
                        onClick={toggleThirdProjectExpanded} 
                        className={`fas ${thirdProjectExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                        {" "}
                        <i 
                        className={`fa-solid ${thirdProjectRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} 
                        onClick={thirdProjectRenderedValue ? onThirdProjectTrashClick : onThirdProjectUndoClick}>     
                        </i>
                    </h1>
                    { thirdProjectExpanded ?
                    <ProjectInputsContainer 
                    {...thirdProjectInputsContainerProps}
                    />
                    : null }
                </div>

                {/* SECOND PROJECT CONTAINER */}
                <div className="first-project-container reusable-secondary-grouping-container">
                    <h1 
                    className='first-project-header project-header reusable-grouping-header'>
                        {"Project 2 "}
                        <i 
                        onClick={toggleFirstProjectExpanded} 
                        className={`fas ${firstProjectExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                        {" "}
                        <i 
                        className={`fa-solid ${firstProjectRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} 
                        onClick={firstProjectRenderedValue ? onFirstProjectTrashClick : onFirstProjectUndoClick}>     
                        </i>
                    </h1>
                    { firstProjectExpanded ?
                    <ProjectInputsContainer 
                    {...firstProjectInputsContainerProps}
                    />
                    : null }
                </div>

                {/* THIRD PROJECT CONTAINER */}
                <div className="second-project-container reusable-secondary-grouping-container">
                    <h1 
                    className='second-project-header project-header reusable-grouping-header'>
                        {"Project 3 "}
                        <i 
                        onClick={toggleSecondProjectExpanded} 
                        className={`fas ${secondProjectExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                        {" "}
                        <i 
                        className={`fa-solid ${secondProjectRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} 
                        onClick={secondProjectRenderedValue ? onSecondProjectTrashClick : onSecondProjectUndoClick}>     
                        </i>
                    </h1>
                    { secondProjectExpanded ?
                    <ProjectInputsContainer 
                    {...secondProjectInputsContainerProps}
                    />
                    : null }
                </div>
            </div>
            : null}
        </div>
    );
}

export default ProjectsEditor