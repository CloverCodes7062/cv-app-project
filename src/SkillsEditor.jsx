import { useState } from 'react'
import './SkillsEditor.css'

function SkillsEditor(props) {

    const {
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
        onFirstMiscellaneousChange,
        onSecondMiscellaneousChange,
        onThirdMiscellaneousChange,
        onFourthMiscellaneousChange,
        onFifthMiscellaneousChange,
        onSixthMiscellaneousChange,
        onSeventhMiscellaneousChange,
        onEighthMiscellaneousChange,
        onNinthMiscellaneousChange,
        onTenthMiscellaneousChange,
        onElventhMiscellaneousChange,
        onTwelfthMiscellaneousChange,
        onThirteenMiscellaneousChange,
        onFourteenMiscellaneousChange,
        onFirstFrameworkOrLibraryChange,
        onSecondFrameworkOrLibraryChange,
        onThirdFrameworkOrLibraryChange,
        onFourthFrameworkOrLibraryChange,
        onFifthFrameworkOrLibraryChange,
        onSixthFrameworkOrLibraryChange,
        onSeventhFrameworkOrLibraryChange,
        onEighthFrameworkOrLibraryChange,
        onNinthFrameworkOrLibraryChange,
        onTenthFrameworkOrLibraryChange,
        onEleventhFrameworkOrLibraryChange,
        onTwelfthFrameworkOrLibraryChange,
        onThirteenFrameworkOrLibraryChange,
        onFourteenFrameworkOrLibraryChange,
        onFirstLanguageChange,
        onSecondLanguageChange,
        onThirdLanguageChange,
        onFourthLanguageChange,
        onFifthLanguageChange,
        onSixthLanguageChange,
        onSeventhLanguageChange,
        onEighthLanguageChange,
        onNinthLanguageChange,
        skillsRenderedValue,
        onTrashClick,
        onUndoClick,
    } = props;

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const [languagesExpanded, toggleLanguagesExpanded] = useState(false);
    const [frameworksAndLibrariesExpanded, toggleFrameworksAndLibraries] = useState(false);
    const [miscellaneousExpanded, toggleMiscellaneousExpanded] = useState(false);

    const handleLangaugesExpand = () => {
        toggleLanguagesExpanded(!languagesExpanded);
    };

    const handleFrameworksAndLibrariesExpand = () => {
        toggleFrameworksAndLibraries(!frameworksAndLibrariesExpanded);
    };

    const handleMiscellaneousExpanded = () => {
        toggleMiscellaneousExpanded(!miscellaneousExpanded);
    };

    const handleChange = (changeFunction) => (event) => {
        changeFunction(event.target.value);
    };

    return (
        <div className='skills-editor-container editor-container-reusable'>
            <h1>
                <i 
                className="fa-solid fa-code">
                </i>
                {" Skills "}
                <i 
                className={`fas ${expanded ? 'fa-caret-up' : 'fa-caret-down'}`} 
                onClick={toggleExpand}>
                </i>
                {"  "}
                <i className={`fa-solid ${skillsRenderedValue ? 'fa-trash-can' : 'fa-undo'}`} 
                onClick={skillsRenderedValue ? onTrashClick : onUndoClick}>
                </i>
            </h1>
            {expanded ?
            <div className="projects-container reusable-main-grouping-container animate__animated animate__fadeIn">

                {/* LANGUAGES CONTAINER */}
                <div className="language-container reusable-secondary-grouping-container">
                    <h1 
                    className='languages-header project-header reusable-grouping-header'>
                        {"Languages "}
                        <i 
                        onClick={handleLangaugesExpand} 
                        className={`fas ${languagesExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                    </h1>
                    {languagesExpanded ?
                    <div className="language-inputs-container animate__animated animate__fadeIn">
                        <div className="first-language input-container margin-top">
                            <p>1st Language</p>
                            <input type="text" value={firstLanguage} onChange={handleChange(onFirstLanguageChange)} className="language-1-input input-form" />
                        </div>
                        <div className="second-language input-container">
                            <p>2nd Language</p>
                            <input type="text" value={secondLanguage} onChange={handleChange(onSecondLanguageChange)} className="language-2-input input-form" />
                        </div>
                        <div className="third-language input-container">
                            <p>3rd Language</p>
                            <input type="text" value={thirdLanguage} onChange={handleChange(onThirdLanguageChange)} className="language-3-input input-form" />
                        </div>
                        <div className="fourth-language input-container">
                            <p>4th Language</p>
                            <input type="text" value={fourthLanguage} onChange={handleChange(onFourthLanguageChange)} className="language-4-input input-form" />
                        </div>
                        <div className="fifth-language input-container">
                            <p>5th Language</p>
                            <input type="text" value={fifthLanguage} onChange={handleChange(onFifthLanguageChange)} className="language-5-input input-form" />
                        </div>
                        <div className="sixth-language input-container">
                            <p>6th Language</p>
                            <input type="text" value={sixthLanguage} onChange={handleChange(onSixthLanguageChange)} className="language-6-input input-form" />
                        </div>
                        <div className="seventh-language input-container">
                            <p>7th Language</p>
                            <input type="text" value={seventhLanguage} onChange={handleChange(onSeventhLanguageChange)} className="language-7-input input-form" />
                        </div>
                        <div className="eighth-language input-container">
                            <p>8th Language</p>
                            <input type="text" value={eighthLanguage} onChange={handleChange(onEighthLanguageChange)} className="language-8-input input-form" />
                        </div>
                        <div className="ninth-language input-container">
                            <p>9th Language</p>
                            <input type="text" value={ninthLanguage} onChange={handleChange(onNinthLanguageChange)} className="language-9-input input-form" />
                        </div>
                    </div>
                    : null}
                </div>

                {/* FRAMEWORKS AND LIBRARIES CONTAINER */}
                <div className="frameworks-and-libraries-container reusable-secondary-grouping-container">
                    <h1 
                    className='frameworks-and-libraries-header project-header reusable-grouping-header'>
                        {"Frameworks/Libraries "}
                        <i 
                        onClick={handleFrameworksAndLibrariesExpand}
                        className={`fas ${frameworksAndLibrariesExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                    </h1>
                    {frameworksAndLibrariesExpanded ?
                    <div className="frameworks-inputs-container animate__animated animate__fadeIn">
                        <div className="first-framework-or-library input-container margin-top">
                            <p>1st Framework/Library</p>
                            <input type="text" value={firstFrameworkOrLibrary} onChange={handleChange(onFirstFrameworkOrLibraryChange)} className="framework-or-library-1-input input-form" />
                        </div>
                        <div className="second-framework-or-library input-container">
                            <p>2nd Framework/Library</p>
                            <input type="text" value={secondFrameworkOrLibrary} onChange={handleChange(onSecondFrameworkOrLibraryChange)} className="framework-or-library-2-input input-form" />
                        </div>
                        <div className="third-framework-or-library input-container">
                            <p>3rd Framework/Library</p>
                            <input type="text" value={thirdFrameworkOrLibrary} onChange={handleChange(onThirdFrameworkOrLibraryChange)} className="framework-or-library-3-input input-form" />
                        </div>
                        <div className="fourth-framework-or-library input-container">
                            <p>4th Framework/Library</p>
                            <input type="text" value={fourthFrameworkOrLibrary} onChange={handleChange(onFourthFrameworkOrLibraryChange)} className="framework-or-library-4-input input-form" />
                        </div>
                        <div className="fifth-framework-or-library input-container">
                            <p>5th Framework/Library</p>
                            <input type="text" value={fifthFrameworkOrLibrary} onChange={handleChange(onFifthFrameworkOrLibraryChange)} className="framework-or-library-5-input input-form" />
                        </div>
                        <div className="sixth-framework-or-library input-container">
                            <p>6th Framework/Library</p>
                            <input type="text" value={sixthFrameworkOrLibrary} onChange={handleChange(onSixthFrameworkOrLibraryChange)} className="framework-or-library-6-input input-form" />
                        </div>
                        <div className="seventh-framework-or-library input-container">
                            <p>7th Framework/Library</p>
                            <input type="text" value={seventhFrameworkOrLibrary} onChange={handleChange(onSeventhFrameworkOrLibraryChange)} className="framework-or-library-7-input input-form" />
                        </div>
                        <div className="eighth-framework-or-library input-container">
                            <p>8th Framework/Library</p>
                            <input type="text" value={eighthFrameworkOrLibrary} onChange={handleChange(onEighthFrameworkOrLibraryChange)} className="framework-or-library-8-input input-form" />
                        </div>
                        <div className="ninth-framework-or-library input-container">
                            <p>9th Framework/Library</p>
                            <input type="text" value={ninthFrameworkOrLibrary} onChange={handleChange(onNinthFrameworkOrLibraryChange)} className="framework-or-library-9-input input-form" />
                        </div>
                        <div className="tenth-framework-or-library input-container">
                            <p>10th Framework/Library</p>
                            <input type="text" value={tenthFrameworkOrLibrary} onChange={handleChange(onTenthFrameworkOrLibraryChange)} className="framework-or-library-10-input input-form" />
                        </div>
                        <div className="eleventh-framework-or-library input-container">
                            <p>11th Framework/Library</p>
                            <input type="text" value={eleventhFrameworkOrLibrary} onChange={handleChange(onEleventhFrameworkOrLibraryChange)} className="framework-or-library-11-input input-form" />
                        </div>
                        <div className="twelfth-framework-or-library input-container">
                            <p>12th Framework/Library</p>
                            <input type="text" value={twelfthFrameworkOrLibrary} onChange={handleChange(onTwelfthFrameworkOrLibraryChange)} className="framework-or-library-12-input input-form" />
                        </div>
                        <div className="thirteen-framework-or-library input-container">
                            <p>13th Framework/Library</p>
                            <input type="text" value={thirteenFrameworkOrLibrary} onChange={handleChange(onThirteenFrameworkOrLibraryChange)} className="framework-or-library-13-input input-form" />
                        </div>
                        <div className="fourteen-framework-or-library input-container">
                            <p>14th Framework/Library</p>
                            <input type="text" value={fourteenFrameworkOrLibrary} onChange={handleChange(onFourteenFrameworkOrLibraryChange)} className="framework-or-library-14-input input-form" />
                        </div>
                    </div>
                    : null}
                </div>

                {/* MISCELLANEOUS CONTAINER */}
                <div className="miscellaneous-container reusable-secondary-grouping-container">
                    <h1 
                    className='miscellaneous-header project-header reusable-grouping-header'>
                        {"Miscellaneous "}
                        <i 
                        onClick={handleMiscellaneousExpanded}
                        className={`fas ${miscellaneousExpanded ? 'fa-caret-up' : 'fa-caret-down'}`}>
                        </i>
                    </h1>
                    {miscellaneousExpanded ?
                    <div className="miscellaneous-inputs-container animate__animated animate__fadeIn">
                        <div className="first-miscellaneous input-container margin-top">
                            <p>1st Miscellaneous</p>
                            <input type="text" value={firstMiscellaneous} onChange={handleChange(onFirstMiscellaneousChange)} className="miscellaneous-1-input input-form" />
                        </div>
                        <div className="second-miscellaneous input-container">
                            <p>2nd Miscellaneous</p>
                            <input type="text" value={secondMiscellaneous} onChange={handleChange(onSecondMiscellaneousChange)} className="miscellaneous-2-input input-form" />
                        </div>
                        <div className="third-miscellaneous input-container">
                            <p>3rd Miscellaneous</p>
                            <input type="text" value={thirdMiscellaneous} onChange={handleChange(onThirdMiscellaneousChange)} className="miscellaneous-3-input input-form" />
                        </div>
                        <div className="fourth-miscellaneous input-container">
                            <p>4th Miscellaneous</p>
                            <input type="text" value={fourthMiscellaneous} onChange={handleChange(onFourthMiscellaneousChange)} className="miscellaneous-4-input input-form" />
                        </div>
                        <div className="fifth-miscellaneous input-container">
                            <p>5th Miscellaneous</p>
                            <input type="text" value={fifthMiscellaneous} onChange={handleChange(onFifthMiscellaneousChange)} className="miscellaneous-5-input input-form" />
                        </div>
                        <div className="sixth-miscellaneous input-container">
                            <p>6th Miscellaneous</p>
                            <input type="text" value={sixthMiscellaneous} onChange={handleChange(onSixthMiscellaneousChange)} className="miscellaneous-6-input input-form" />
                        </div>
                        <div className="seventh-miscellaneous input-container">
                            <p>7th Miscellaneous</p>
                            <input type="text" value={seventhMiscellaneous} onChange={handleChange(onSeventhMiscellaneousChange)} className="miscellaneous-7-input input-form" />
                        </div>
                        <div className="eighth-miscellaneous input-container">
                            <p>8th Miscellaneous</p>
                            <input type="text" value={eighthMiscellaneous} onChange={handleChange(onEighthMiscellaneousChange)} className="miscellaneous-8-input input-form" />
                        </div>
                        <div className="ninth-miscellaneous input-container">
                            <p>9th Miscellaneous</p>
                            <input type="text" value={ninthMiscellaneous} onChange={handleChange(onNinthMiscellaneousChange)} className="miscellaneous-9-input input-form" />
                        </div>
                        <div className="tenth-miscellaneous input-container">
                            <p>10th Miscellaneous</p>
                            <input type="text" value={tenthMiscellaneous} onChange={handleChange(onTenthMiscellaneousChange)} className="miscellaneous-10-input input-form" />
                        </div>
                        <div className="eleventh-miscellaneous input-container">
                            <p>11th Miscellaneous</p>
                            <input type="text" value={eleventhMiscellaneous} onChange={handleChange(onElventhMiscellaneousChange)} className="miscellaneous-11-input input-form" />
                        </div>
                        <div className="twelfth-miscellaneous input-container">
                            <p>12th Miscellaneous</p>
                            <input type="text" value={twelfthMiscellaneous} onChange={handleChange(onTwelfthMiscellaneousChange)} className="miscellaneous-12-input input-form" />
                        </div>
                        <div className="thirteen-miscellaneous input-container">
                            <p>13th Miscellaneous</p>
                            <input type="text" value={thirteenMiscellaneous} onChange={handleChange(onThirteenMiscellaneousChange)} className="miscellaneous-13-input input-form" />
                        </div>
                        <div className="fourteen-miscellaneous input-container">
                            <p>14th Miscellaneous</p>
                            <input type="text" value={fourteenMiscellaneous} onChange={handleChange(onFourteenMiscellaneousChange)} className="miscellaneous-14-input input-form" />
                        </div>
                    </div>
                    : null}
                </div>
            </div>
            : null}
        </div>
    );
}

export default SkillsEditor