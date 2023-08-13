import { useState } from "react";
import './CvExperience.css';

function CvExperience({
    firstJobName,
    firstJobKeyPt1,
    firstJobKeyPt2,
    firstJobKeyPt3,
    secondJobName,
    secondJobKeyPt1,
    secondJobKeyPt2,
    secondJobKeyPt3,
    thirdJobName,
    thirdJobKeyPt1,
    thirdJobKeyPt2,
    thirdJobKeyPt3,
    experienceRenderedValue,
    firstJobRenderedValue,
    secondJobRenderedValue,
    thirdJobRenderedValue,
}) {

    return(
        experienceRenderedValue ?
        <div className='main-experience-container main-container'>
            <h1 className='section-header'>Experience</h1>
            <div className='second-projects-container'>
                <ul className="experience-list ul-list">
                    {firstJobRenderedValue ?
                    <li>
                        {firstJobName ?
                        <h2>{firstJobName}</h2>
                        : null}
                        {firstJobKeyPt1 ?
                        <p className='tab'>&bull; {firstJobKeyPt1}</p>
                        : null}
                        {firstJobKeyPt2 ?
                        <p className='tab margin-top'>&bull; {firstJobKeyPt2}</p>
                        : null}
                        {firstJobKeyPt3 ?
                        <p className='tab margin-top'>&bull; {firstJobKeyPt3}</p>
                        : null}
                    </li>
                    : null}
                    {secondJobRenderedValue ?
                    <li>
                        {secondJobName ?
                        <h2>{secondJobName}</h2>
                        : null}
                        {secondJobKeyPt1 ?
                        <p className='tab'>&bull; {secondJobKeyPt1}</p>
                        : null}
                        {secondJobKeyPt2 ?
                        <p className='tab margin-top'>&bull; {secondJobKeyPt2}</p>
                        : null}
                        {secondJobKeyPt3 ?
                        <p className='tab margin-top'>&bull; {secondJobKeyPt3}</p>
                        : null}
                    </li>
                    : null}
                    {thirdJobRenderedValue ?
                    <li>
                        {thirdJobName ?
                        <h2>{thirdJobName}</h2>
                        : null}
                        {thirdJobKeyPt1 ?
                        <p className='tab'>&bull; {thirdJobKeyPt1}</p>
                        : null}
                        {thirdJobKeyPt2 ?
                        <p className='tab margin-top'>&bull; {thirdJobKeyPt2}</p>
                        : null}
                        {thirdJobKeyPt3 ?
                        <p className='tab margin-top'>&bull; {thirdJobKeyPt3}</p>
                        : null}
                    </li>
                    : null}
                </ul>
            </div>
        </div>
        : null
    );
}

export default CvExperience