import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Background from './Background.jsx'
import CvContainer from './CvContainer.jsx'
import EditorContainer from './EditorContainer.jsx'
import CvHeader from './CvHeader.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PersonalDetailsEditor from './PersonalDetailsEditor.jsx'
import CvEducation from './CvEducation'
import EducationEditor from './EducationEditor'
import 'animate.css';
import CvProjects from './CvProjects'
import ProjectsEditor from './ProjectsEditor'
import CvCoursework from './CvCourseWork'
import CourseworkEditor from './CourseworkEditor'
import CvExperience from './CvExperience'
import ExperienceEditor from './ExperienceEditor'
import CvSkills from './CvSkills'
import SkillsEditor from './skillsEditor'

function App() {
  const [nameValue, setNameValue] = React.useState('Stacy McCarrell');
  const [emailValue, setEmailValue] = React.useState('clovercodes7062@gmail.com');
  const [phoneNumberValue, setPhoneNumberValue] = React.useState('918-800-9061');
  const [addressValue, setAddressValue] = React.useState('Tulsa, OK');

  const [durationValue, setDurationValue] = React.useState('08/2023 - present');
  const [collegeLocationValue, setCollegeLocationValue] = React.useState('Salt Lake City, Utah');
  const [schoolValue, setSchoolValue] = React.useState('Western Governors University');
  const [degreeValue, setDegreeValue] = React.useState("Bachelor's of Science in Computer Science");

  const [eduRenderedValue, setEduRenderedValue] = React.useState(true);
  const [projectRenderedValue, setProjectsRenderedValue] = React.useState(true);
  const [courseworkRenderedValue, setCourseworkRenderedValue] = React.useState(true);
  const [experienceRenderedValue, setExperienceRenderedValue] = React.useState(false);
  const [skillsRenderedValue, setSkillsRenderedValue] = React.useState(true);

  const [firstProjectName, setFirstProjectName] = React.useState('Python Flappy Bird Clone with NEAT Neural Network');
  const [firstProjectKeyPt1, setFirstProjectKeyPt1] = React.useState('Developed a Flappy Bird clone using Python and Pygame library, implementing game mechanics and graphics.');
  const [firstProjectKeyPt2, setFirstProjectKeyPt2] = React.useState('Integrated the NEAT (NeuroEvolution of Augmenting Topologies) neural network to train an AI agent to play the game autonomously.');
  const [firstProjectKeyPt3, setFirstProjectKeyPt3] = React.useState('Demonstrated proficiency in Python programming, game development, and artificial intelligence.');

  const [firstProjectRenderedValue, setFirstProjectRenderedValue] = React.useState(true);
  const [secondProjectRenderedValue, setSecondProjectRenderedValue] = React.useState(true);
  const [thirdProjectRenderedValue, setThirdProjectRenderedValue] = React.useState(true);

  const [secondProjectName, setSecondProjectName] = React.useState('Weather App');
  const [secondProjectKeyPt1, setSecondProjectKeyPt1] = React.useState('Created a weather app that allows users to input a zip code and fetches the current weather using Node.js, jQuery, HTML, CSS, Font Awesome styles, Bootstrap, and animate.css.');
  const [secondProjectKeyPt2, setSecondProjectKeyPt2] = React.useState('Utilized a weather API to retrieve real-time weather data and display it in a visually appealing format.');
  const [secondProjectKeyPt3, setSecondProjectKeyPt3] = React.useState('Gained experience in working with APIs and handling user input for practical application development.');

  const [thirdProjectName, setThirdProjectName] = React.useState('React Web App: Resume Builder');
  const [thirdProjectKeyPt1, setThirdProjectKeyPt1] = React.useState('Developed a user-friendly resume builder using React, JSX, HTML, CSS, Bootstrap, Font Awesome styles, and animate.css.');
  const [thirdProjectKeyPt2, setThirdProjectKeyPt2] = React.useState('Utilized state management in React for dynamic user interface updates.');
  const [thirdProjectKeyPt3, setThirdProjectKeyPt3] = React.useState('Hosted on Netlify for online accessibility.');
  
  const [firstCourseRenderedValue, setFirstCourseRenderedValue] = React.useState(true);

  const [firstCourse, setFirstCourse] = React.useState('Java Fundamentals');
  const [secondCourse, setSecondCourse] = React.useState('Data Structures and Algorithms 1');
  const [thirdCourse, setThirdCourse] = React.useState('Web Development');
  const [fourthCourse, setFourthCourse] = React.useState('Scripting and Programming')
  const [fifthCourse, setFifthCourse] = React.useState('');
  const [sixthCourse, setSixthCourse] = React.useState('');
  const [seventhCourse, setSeventhCourse] = React.useState('');
  const [eighthCourse, setEighthCourse] = React.useState('');

  const [firstJobName, setFirstJobName] = React.useState('');
  const [secondJobName, setSecondJobName] = React.useState('');
  const [thirdJobName, setThirdJobName] = React.useState('');

  const [firstJobRenderedValue, setFirstJobRenderedValue] = React.useState(true);
  const [secondJobRenderedValue, setSecondJobRenderedValue] = React.useState(true);
  const [thirdJobRenderedValue, setThirdJobRenderedValue] = React.useState(true);

  const [firstJobKeyPt1, setFirstJobKeyPt1] = React.useState('');
  const [firstJobKeyPt2, setFirstJobKeyPt2] = React.useState('');
  const [firstJobKeyPt3, setFirstJobKeyPt3] = React.useState('');
  const [secondJobKeyPt1, setSecondJobKeyPt1] = React.useState('');
  const [secondJobKeyPt2, setSecondJobKeyPt2] = React.useState('');
  const [secondJobKeyPt3, setSecondJobKeyPt3] = React.useState('');
  const [thirdJobKeyPt1, setThirdJobKeyPt1] = React.useState('');
  const [thirdJobKeyPt2, setThirdJobKeyPt2] = React.useState('');
  const [thirdJobKeyPt3, setThirdJobKeyPt3] = React.useState('');

  const [firstLanguage, setFirstLanguage] = React.useState('Python');
  const [secondLanguage, setSecondLanguage] = React.useState('Javascript');
  const [thirdLanguage, setThirdLanguage] = React.useState('Java');
  const [fourthLanguage, setFourthLanguage] = React.useState('HTML');
  const [fifthLanguage, setFifthLanguage] = React.useState('CSS');
  const [sixthLanguage, setSixthLanguage] = React.useState('');
  const [seventhLanguage, setSeventhLanguage] = React.useState('');
  const [eighthLanguage, setEighthLanguage] = React.useState('');
  const [ninthLanguage, setNinthLanguage] = React.useState('');

  const [firstFrameworkOrLibrary, setFirstFrameworkOrLibrary] = React.useState('React.js');
  const [secondFrameworkOrLibrary, setSecondFrameworkOrLibrary] = React.useState('Node.js');
  const [thirdFrameworkOrLibrary, setThirdFrameworkOrLibrary] = React.useState('jQuery');
  const [fourthFrameworkOrLibrary, setFourthFrameworkOrLibrary] = React.useState('JSX');
  const [fifthFrameworkOrLibrary, setFifthFrameworkOrLibrary] = React.useState('Bootstrap');
  const [sixthFrameworkOrLibrary, setSixthFrameworkOrLibrary] = React.useState('Animate.css');
  const [seventhFrameworkOrLibrary, setSeventhFrameworkOrLibrary] = React.useState('Font Awesome Styles');
  const [eighthFrameworkOrLibrary, setEighthFrameworkOrLibrary] = React.useState('Flask');
  const [ninthFrameworkOrLibrary, setNinthFrameworkOrLibrary] = React.useState('Pygame');
  const [tenthFrameworkOrLibrary, setTenthFrameworkOrLibrary] = React.useState('');
  const [eleventhFrameworkOrLibrary, setEleventhFrameworkOrLibrary] = React.useState('');
  const [twelfthFrameworkOrLibrary, setTwelfthFrameworkOrLibrary] = React.useState('');
  const [thirteenFrameworkOrLibrary, setThirteenFrameworkOrLibrary] = React.useState('');
  const [fourteenFrameworkOrLibrary, setFourteenFrameworkOrLibrary] = React.useState('');

  const [firstMiscellaneous, setFirstMiscellaneous] = React.useState('VsCode');
  const [secondMiscellaneous, setSecondMiscellaneous] = React.useState('PyCharm');
  const [thirdMiscellaneous, setThirdMiscellaneous] = React.useState('Windows');
  const [fourthMiscellaneous, setFourthMiscellaneous] = React.useState('MacOS');
  const [fifthMiscellaneous, setFifthMiscellaneous] = React.useState('Mircosoft Excel');
  const [sixthMiscellaneous, setSixthMiscellaneous] = React.useState('Mircosoft Word');
  const [seventhMiscellaneous, setSeventhMiscellaneous] = React.useState('Mircosoft Excel');
  const [eighthMiscellaneous, setEighthMiscellaneous] = React.useState('NEAT AI');
  const [ninthMiscellaneous, setNinthMiscellaneous] = React.useState('Concise Communication');
  const [tenthMiscellaneous, setTenthMiscellaneous] = React.useState('');
  const [eleventhMiscellaneous, setEleventhMiscellaneous] = React.useState('');
  const [twelfthMiscellaneous, setTwelfthMiscellaneous] = React.useState('');
  const [thirteenMiscellaneous, setThirteenMiscellaneous] = React.useState('');
  const [fourteenMiscellaneous, setFourteenMiscellaneous] = React.useState('');

  const handleChange = (setStateFn) => (newValue) => {
    setStateFn(newValue);
  };
  
  const PersonalDetailsEditorProps = {
    nameValue,
    onNameChange: (newValue) => setNameValue(newValue),
    emailValue,
    onEmailChange: (newValue) => setEmailValue(newValue),
    phoneNumberValue,
    onPhoneNumberChange: (newValue) => setPhoneNumberValue(newValue), 
    addressValue,
    onAddressChange: (newValue) => setAddressValue(newValue),
  }

  const EducationEditorProps = {
    school: schoolValue,
    onSchoolChange: handleChange(setSchoolValue),
    degree: degreeValue,
    onDegreeChange: handleChange(setDegreeValue),
    duration: durationValue,
    onDurationChange: handleChange(setDurationValue),
    location: collegeLocationValue,
    onLocationChange: handleChange(setCollegeLocationValue),
    eduRenderedValue: eduRenderedValue,
    onTrashClick: () => setEduRenderedValue(false),
    onUndoClick: () => setEduRenderedValue(true),
  };

  const CourseworkEditorProps = {
    firstCourse,
    secondCourse,
    thirdCourse,
    fourthCourse,
    fifthCourse,
    sixthCourse,
    seventhCourse,
    eighthCourse,
    onFirstCourseChange: handleChange(setFirstCourse),
    onSecondCourseChange: handleChange(setSecondCourse),
    onThirdCourseChange: handleChange(setThirdCourse),
    onFourthCourseChange: handleChange(setFourthCourse),
    onFifthCourseChange: handleChange(setFifthCourse),
    onSixthCourseChange: handleChange(setSixthCourse),
    onSeventhCourseChange: handleChange(setSeventhCourse),
    onEighthCourseChange: handleChange(setEighthCourse),
    onTrashClick: () => setCourseworkRenderedValue(false),
    onUndoClick: () => setCourseworkRenderedValue(true),
    courseworkRenderedValue,
  };

  const ExperienceEditorProps = {
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
    onFirstJobNameChange: handleChange(setFirstJobName),
    onFirstJobKeyPt1Change: handleChange(setFirstJobKeyPt1),
    onFirstJobKeyPt2Change: handleChange(setFirstJobKeyPt2),
    onFirstJobKeyPt3Change: handleChange(setFirstJobKeyPt3),
    onSecondJobNameChange: handleChange(setSecondJobName),
    onSecondJobKeyPt1Change: handleChange(setSecondJobKeyPt1),
    onSecondJobKeyPt2Change: handleChange(setSecondJobKeyPt2),
    onSecondJobKeyPt3Change: handleChange(setSecondJobKeyPt3),
    onThirdJobNameChange: handleChange(setThirdJobName),
    onThirdJobKeyPt1Change: handleChange(setThirdJobKeyPt1),
    onThirdJobKeyPt2Change: handleChange(setThirdJobKeyPt2),
    onThirdJobKeyPt3Change: handleChange(setThirdJobKeyPt3),
    experienceRenderedValue,
    firstJobRenderedValue,
    secondJobRenderedValue,
    thirdJobRenderedValue,
    onTrashClick: () => setExperienceRenderedValue(false),
    onUndoClick: () => setExperienceRenderedValue(true),
    onFirstJobTrashClick: () => setFirstJobRenderedValue(false),
    onFirstJobUndoClick: () => setFirstJobRenderedValue(true),
    onSecondJobTrashClick: () => setSecondJobRenderedValue(false),
    onSecondJobUndoClick: () => setSecondJobRenderedValue(true),
    onThirdJobTrashClick: () => setThirdJobRenderedValue(false),
    onThirdJobUndoClick: () => setThirdJobRenderedValue(true),
  };

  const ProjectsEditorProps = {
    firstProjectName,
    firstProjectKeyPt1,
    firstProjectKeyPt2,
    firstProjectKeyPt3,
    onFirstProjectNameChange: handleChange(setFirstProjectName),
    onFirstProjectKeyPt1Change: handleChange(setFirstProjectKeyPt1),
    onFirstProjectKeyPt2Change: handleChange(setFirstProjectKeyPt2),
    onFirstProjectKeyPt3Change: handleChange(setFirstProjectKeyPt3),
    onTrashClick: () => setProjectsRenderedValue(false),
    onUndoClick: () => setProjectsRenderedValue(true),
    projectRenderedValue,
    firstProjectRenderedValue,
    onFirstProjectTrashClick: () => setFirstProjectRenderedValue(false),
    onFirstProjectUndoClick: () => setFirstProjectRenderedValue(true),
    secondProjectName,
    secondProjectKeyPt1,
    secondProjectKeyPt2,
    secondProjectKeyPt3,
    onSecondProjectNameChange: handleChange(setSecondProjectName),
    onSecondProjectKeyPt1Change: handleChange(setSecondProjectKeyPt1),
    onSecondProjectKeyPt2Change: handleChange(setSecondProjectKeyPt2),
    onSecondProjectKeyPt3Change: handleChange(setSecondProjectKeyPt3),
    secondProjectRenderedValue,
    onSecondProjectTrashClick: () => setSecondProjectRenderedValue(false),
    onSecondProjectUndoClick: () => setSecondProjectRenderedValue(true),
    thirdProjectName,
    thirdProjectKeyPt1,
    thirdProjectKeyPt2,
    thirdProjectKeyPt3,
    onThirdProjectNameChange: handleChange(setThirdProjectName),
    onThirdProjectKeyPt1Change: handleChange(setThirdProjectKeyPt1),
    onThirdProjectKeyPt2Change: handleChange(setThirdProjectKeyPt2),
    onThirdProjectKeyPt3Change: handleChange(setThirdProjectKeyPt3),
    thirdProjectRenderedValue,
    onThirdProjectTrashClick: () => setThirdProjectRenderedValue(false),
    onThirdProjectUndoClick: () => setThirdProjectRenderedValue(true),
  };

  const SkillsEditorProps = {
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
    onFirstMiscellaneousChange: handleChange(setFirstMiscellaneous),
    onSecondMiscellaneousChange: handleChange(setSecondMiscellaneous),
    onThirdMiscellaneousChange: handleChange(setThirdMiscellaneous),
    onFourthMiscellaneousChange: handleChange(setFourthMiscellaneous),
    onFifthMiscellaneousChange: handleChange(setFifthMiscellaneous),
    onSixthMiscellaneousChange: handleChange(setSixthMiscellaneous),
    onSeventhMiscellaneousChange: handleChange(setSeventhMiscellaneous),
    onEighthMiscellaneousChange: handleChange(setEighthMiscellaneous),
    onNinthMiscellaneousChange: handleChange(setNinthMiscellaneous),
    onTenthMiscellaneousChange: handleChange(setTenthMiscellaneous),
    onElventhMiscellaneousChange: handleChange(setEleventhMiscellaneous),
    onTwelfthMiscellaneousChange: handleChange(setTwelfthMiscellaneous),
    onThirteenMiscellaneousChange: handleChange(setThirteenMiscellaneous),
    onFourteenMiscellaneousChange: handleChange(setFourteenMiscellaneous),
    onFirstLanguageChange: handleChange(setFirstLanguage),
    onSecondLanguageChange: handleChange(setSecondLanguage),
    onThirdLanguageChange: handleChange(setThirdLanguage),
    onFourthLanguageChange: handleChange(setFourthLanguage),
    onFifthLanguageChange: handleChange(setFifthLanguage),
    onSixthLanguageChange: handleChange(setSixthLanguage),
    onSeventhLanguageChange: handleChange(setSeventhLanguage),
    onEighthLanguageChange: handleChange(setEighthLanguage),
    onNinthLanguageChange: handleChange(setNinthLanguage),
    onFirstFrameworkOrLibraryChange: handleChange(setFirstFrameworkOrLibrary),
    onSecondFrameworkOrLibraryChange: handleChange(setSecondFrameworkOrLibrary),
    onThirdFrameworkOrLibraryChange: handleChange(setThirdFrameworkOrLibrary),
    onFourthFrameworkOrLibraryChange: handleChange(setFourthFrameworkOrLibrary),
    onFifthFrameworkOrLibraryChange: handleChange(setFifthFrameworkOrLibrary),
    onSixthFrameworkOrLibraryChange: handleChange(setSixthFrameworkOrLibrary),
    onSeventhFrameworkOrLibraryChange: handleChange(setSeventhFrameworkOrLibrary),
    onEighthFrameworkOrLibraryChange: handleChange(setEighthFrameworkOrLibrary),
    onNinthFrameworkOrLibraryChange: handleChange(setNinthFrameworkOrLibrary),
    onTenthFrameworkOrLibraryChange: handleChange(setTenthFrameworkOrLibrary),
    onEleventhFrameworkOrLibraryChange: handleChange(setEleventhFrameworkOrLibrary),
    onTwelfthFrameworkOrLibraryChange: handleChange(setTwelfthFrameworkOrLibrary),
    onThirteenFrameworkOrLibraryChange: handleChange(setThirteenFrameworkOrLibrary),
    onFourteenFrameworkOrLibraryChange: handleChange(setFourteenFrameworkOrLibrary),
    skillsRenderedValue,
    onTrashClick: () => setSkillsRenderedValue(false),
    onUndoClick: () => setSkillsRenderedValue(true),
  };

  const CvHeaderProps = {
    name: nameValue, 
    email: emailValue,
    phoneNumber: phoneNumberValue,
    address: addressValue,
  };

  const CvEducationProps = {
    school: schoolValue,
    duration: durationValue,
    collegeLocation: collegeLocationValue,
    degree: degreeValue,
    eduRenderedValue: eduRenderedValue,
  };

  const CvCourseworkProps = {
    firstCourse,
    secondCourse,
    thirdCourse,
    fourthCourse,
    fifthCourse,
    sixthCourse,
    seventhCourse,
    eighthCourse,
    courseworkRenderedValue,
  };

  const CvExperienceProps = {
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
  };

  const CvProjectsProps = {
    firstProjectName,
    firstProjectKeyPt1,
    firstProjectKeyPt2,
    firstProjectKeyPt3,
    secondProjectName,
    secondProjectKeyPt1,
    secondProjectKeyPt2,
    secondProjectKeyPt3,
    thirdProjectName,
    thirdProjectKeyPt1,
    thirdProjectKeyPt2,
    thirdProjectKeyPt3,
    projectRenderedValue,
    firstProjectRenderedValue,
    secondProjectRenderedValue,
    thirdProjectRenderedValue,
  };

  const CvSkillsProps = {
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
    skillsRenderedValue,
  };

  return (
    <React.StrictMode>
      <Background>
        <EditorContainer>
          <PersonalDetailsEditor {...PersonalDetailsEditorProps}/>
          <EducationEditor {...EducationEditorProps}/>
          <CourseworkEditor {...CourseworkEditorProps}/>
          <ExperienceEditor {...ExperienceEditorProps}/>
          <ProjectsEditor {...ProjectsEditorProps}/>
          <SkillsEditor {...SkillsEditorProps}/>
        </EditorContainer>
        <CvContainer>
          <CvHeader {...CvHeaderProps}/>
          <CvEducation {...CvEducationProps}/>
          <CvCoursework {...CvCourseworkProps}/>
          <CvExperience {...CvExperienceProps}/>
          <CvProjects {...CvProjectsProps}/>
          <CvSkills {...CvSkillsProps}/>
        </CvContainer>
      </Background>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
