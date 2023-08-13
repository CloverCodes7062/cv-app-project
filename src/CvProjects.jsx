import { useState } from 'react'
import './CvProjects.css'

function CvProjects({ 
    projectRenderedValue, 
    firstProjectName, 
    firstProjectKeyPt1, 
    firstProjectKeyPt2, 
    firstProjectKeyPt3, 
    firstProjectRenderedValue, 
    secondProjectName, 
    secondProjectKeyPt1, 
    secondProjectKeyPt2, 
    secondProjectKeyPt3, 
    secondProjectRenderedValue,
    thirdProjectName,
    thirdProjectKeyPt1,
    thirdProjectKeyPt2,
    thirdProjectKeyPt3,
    thirdProjectRenderedValue,
}) {
    return (
        projectRenderedValue ?
        (<div className='main-projects-container main-container'>
            <h1 className='section-header'>Projects</h1>
            <div className='second-projects-container'>
                <ul className='projects-list ul-list'>
                    {thirdProjectRenderedValue ?
                    <li>
                        {thirdProjectName ?
                        <h2 className='margin-top'>{thirdProjectName}</h2>
                        : null}
                        {thirdProjectKeyPt1 ?
                        <p className='tab'>&bull; {thirdProjectKeyPt1}</p>
                        : null}
                        {thirdProjectKeyPt2 ?   
                        <p className='tab margin-top'>&bull; {thirdProjectKeyPt2}</p>
                        : null}
                        {thirdProjectKeyPt3 ?
                        <p className='tab margin-top'>&bull; {thirdProjectKeyPt3}</p>
                        : null}
                    </li>
                    : null }
                    {firstProjectRenderedValue ?
                    <li>
                        {firstProjectName ?
                        <h2>{firstProjectName}</h2>
                        : null}
                        {firstProjectKeyPt1 ?
                        <p className='tab'>&bull; {firstProjectKeyPt1}</p>
                        : null}
                        {firstProjectKeyPt2 ?
                        <p className='tab margin-top'>&bull; {firstProjectKeyPt2}</p>
                        : null}
                        {firstProjectKeyPt3 ?
                        <p className='tab margin-top'>&bull; {firstProjectKeyPt3}</p>
                        : null}
                    </li>
                    : null}
                    {secondProjectRenderedValue ?
                    <li>
                        {secondProjectName ?
                        <h2 className='margin-top'>{secondProjectName}</h2>
                        : null}
                        {secondProjectKeyPt1 ?
                        <p className='tab'>&bull; {secondProjectKeyPt1}</p>
                        : null}
                        {secondProjectKeyPt2 ?   
                        <p className='tab margin-top'>&bull; {secondProjectKeyPt2}</p>
                        : null}
                        {secondProjectKeyPt3 ?
                        <p className='tab margin-top'>&bull; {secondProjectKeyPt3}</p>
                        : null}
                    </li>
                    : null }
                </ul>
            </div>
        </div>) : null
    )
}

export default CvProjects