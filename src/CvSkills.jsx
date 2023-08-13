import { useState } from 'react'
import './CvSkills.css'

function CvSkills({ 
    firstLanguage,
    secondLanguage,
    thirdLanguage,
    fourthLanguage,
    fifthLanguage,
    sixthLanguage,
    seventhLanguage,
    eighthLanguage,
    ninthLanguage,
    firstFrameworkOrLibrary,
    secondFrameworkOrLibrary,
    thirdFrameworkOrLibrary,
    fourthFrameworkOrLibrary,
    fifthFrameworkOrLibrary,
    sixthFrameworkOrLibrary,
    seventhFrameworkOrLibrary,
    eighthFrameworkOrLibrary,
    ninthFrameworkOrLibrary,
    tenthFrameworkOrLibrary,
    eleventhFrameworkOrLibrary,
    twelfthFrameworkOrLibrary,
    thirteenFrameworkOrLibrary,
    fourteenFrameworkOrLibrary,
    fifteenFrameworkOrLibrary,
    firstMiscellaneous,
    secondMiscellaneous,
    thirdMiscellaneous,
    fourthMiscellaneous,
    fifthMiscellaneous,
    sixthMiscellaneous,
    seventhMiscellaneous,
    eighthMiscellaneous,
    ninthMiscellaneous,
    tenthMiscellaneous,
    eleventhMiscellaneous,
    twelfthMiscellaneous,
    thirteenMiscellaneous,
    fourteenMiscellaneous,
    skillsRenderedValue,
    languagesRenderedValue,
    frameworksAndLibrariesRenderedValue,
    miscellaneousRenderedValue,
}) {
    return (
        skillsRenderedValue ?
        <div className="main-skills-container main-container">
            <h1 className="section-header">Technical Skills</h1>
            <div className='second-skills-container'>
                <h2>Languages</h2>
                <div className='first-p-container'>
                    {firstLanguage ?
                    <p>{firstLanguage}</p>
                    : null}
                    {secondLanguage ?
                    <p>{secondLanguage}</p>
                    : null}
                    {thirdLanguage ?
                    <p>{thirdLanguage}</p>
                    : null}
                    {fourthLanguage ?
                    <p>{fourthLanguage}</p> 
                    : null}
                    {fifthLanguage ?
                    <p>{fifthLanguage}</p>
                    : null}
                    {sixthLanguage ?
                    <p>{sixthLanguage}</p>  
                    : null}
                    {seventhLanguage ? 
                    <p>{seventhLanguage}</p>
                    : null}
                    {eighthLanguage ?
                    <p>{eighthLanguage}</p>
                    : null}
                    {ninthLanguage ?
                    <p>{ninthLanguage}</p>
                    : null}
                </div>
            </div>
            <div className='third-skills-container'>
                <h2>Frameworks/Libraries</h2>
                <div className='second-p-container'>
                    {firstFrameworkOrLibrary ?
                    <p>{firstFrameworkOrLibrary}</p>
                    : null}
                    {secondFrameworkOrLibrary ?
                    <p>{secondFrameworkOrLibrary}</p>
                    : null}
                    {thirdFrameworkOrLibrary ?
                    <p>{thirdFrameworkOrLibrary}</p>
                    : null}
                    {fourthFrameworkOrLibrary ?
                    <p>{fourthFrameworkOrLibrary}</p>
                    : null}
                    {fifthFrameworkOrLibrary ?
                    <p>{fifthFrameworkOrLibrary}</p>
                    : null}
                    {sixthFrameworkOrLibrary ?
                    <p>{sixthFrameworkOrLibrary}</p>
                    : null}
                    {seventhFrameworkOrLibrary ?
                    <p>{seventhFrameworkOrLibrary}</p>
                    : null}
                    {eighthFrameworkOrLibrary ?
                    <p>{eighthFrameworkOrLibrary}</p>
                    : null}
                </div>
                <div className='second-p-container'>
                    {ninthFrameworkOrLibrary ?
                    <p>{ninthFrameworkOrLibrary}</p>
                    : null}
                    {tenthFrameworkOrLibrary ?
                    <p>{tenthFrameworkOrLibrary}</p>
                    : null}
                    {eleventhFrameworkOrLibrary ?
                    <p>{eleventhFrameworkOrLibrary}</p>
                    : null}
                    {twelfthFrameworkOrLibrary ?
                    <p>{twelfthFrameworkOrLibrary}</p>
                    : null}
                    {thirteenFrameworkOrLibrary ?
                    <p>{thirteenFrameworkOrLibrary}</p>
                    : null}
                    {fourteenFrameworkOrLibrary ?
                    <p>{fourteenFrameworkOrLibrary}</p>
                    : null}
                    {fifteenFrameworkOrLibrary ?
                    <p>{fifteenFrameworkOrLibrary}</p>
                    : null}
                </div>
            </div>
            <div className='fourth-skills-container'>
                <h2>Miscellaneous</h2>
                <div className='third-p-container'>
                    {firstMiscellaneous ?
                    <p>{firstMiscellaneous}</p>
                    : null}
                    {secondMiscellaneous ?
                    <p>{secondMiscellaneous}</p>
                    : null}
                    {thirdMiscellaneous ?
                    <p>{thirdMiscellaneous}</p>
                    : null}
                    {fourthMiscellaneous ?
                    <p>{fourthMiscellaneous}</p>
                    : null}
                    {fifthMiscellaneous ?
                    <p>{fifthMiscellaneous}</p>
                    : null}
                    {sixthMiscellaneous ?
                    <p>{sixthMiscellaneous}</p>
                    : null}
                    {seventhMiscellaneous ?
                    <p>{seventhMiscellaneous}</p>
                    : null}
                </div>
                <div className='third-p-container'>
                    {eighthMiscellaneous ?
                    <p>{eighthMiscellaneous}</p>
                    : null}
                    {ninthMiscellaneous ?
                    <p>{ninthMiscellaneous}</p>
                    : null}
                    {tenthMiscellaneous ?
                    <p>{tenthMiscellaneous}</p>
                    : null}
                    {eleventhMiscellaneous ?
                    <p>{eleventhMiscellaneous}</p>
                    : null}
                    {twelfthMiscellaneous ?
                    <p>{twelfthMiscellaneous}</p>
                    : null}
                    {thirteenMiscellaneous ?
                    <p>{thirteenMiscellaneous}</p>
                    : null}
                    {fourteenMiscellaneous ?
                    <p>{fourteenMiscellaneous}</p>
                    : null}
                </div>
            </div>
        </div>
        : null
    );
}

export default CvSkills