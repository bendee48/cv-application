import { useState, useRef } from 'react'
import GeneralInfo from './GeneralInfo.jsx'
import PersonalStatement from './PersonalStatement.jsx'
import { Experience } from './Experience.jsx'
import Education from './Education.jsx'
import AddButton from './AddButton.jsx'
import Section from './Section.jsx'
import '../styles/App.css'

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
      <Section>
        <h1 className='section-header'>Details</h1>
        <GeneralInfo />
      </Section>
      <Section>
        <h1 className='section-header'>Statement</h1>
        <PersonalStatement />
      </Section>
      <Section>
        <h1 className='section-header'>Experience</h1>
        {experiences}
        <AddButton text="experience" handleClick={addExperience} />
      </Section>
      <Section>
        <h1 className='section-header'>Education</h1>
        {education}
        <AddButton text="education" handleClick={addEducation} />
      </Section>
    </>
  )
}

export default App
