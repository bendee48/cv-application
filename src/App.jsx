import { useState, useRef } from 'react'
import GeneralInfo from './components/GeneralInfo.jsx'
import PersonalStatement from './components/PersonalStatement.jsx'
import { Experience } from './components/Experience.jsx'
import Education from './components/Education.jsx'
import AddButton from './components/AddButton.jsx'
import './App.css'

function App() {
  let expIndex = useRef(0)
  let eduIndex = useRef(0)
  const [experiences, setExperiences] = useState([<Experience key={expIndex.current}/>]);
  const [education, setEducation] = useState([<Education key={eduIndex.current}/>]);

  function addExperience() {
    expIndex.current++;
    setExperiences([
      ...experiences,
      <Experience key={expIndex.current}/>
    ])
  }

  function addEducation() {
    eduIndex.current++;
    setEducation([
      ...education,
      <Education key={eduIndex.current}/>
    ])
  }

  return (
    <>
      <h1>Details</h1>
        <GeneralInfo />
      <h1>Statement</h1>
        <PersonalStatement />
      <h1>Experience</h1>
        {experiences}
        <AddButton text="experience" handleClick={addExperience} />
      <h1>Education</h1>
        {education}
        <AddButton text="education" handleClick={addEducation} />
    </>
  )
}

export default App
