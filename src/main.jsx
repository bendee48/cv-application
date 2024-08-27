import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GeneralInfo } from './components/GeneralInfo.jsx'
import { PersonalStatement } from './components/PersonalStatement.jsx'
import { Experience } from './components/Experience.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <PersonalStatement />
    <Experience />
  </StrictMode>,
)
