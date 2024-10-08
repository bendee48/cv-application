import { useState } from 'react';

function Education() {
  const [educationInfo, setEducationInfo] = useState({institution: "", 
                                                      level: "", 
                                                      subject: "",
                                                      grade: "",
                                                      startDate: "",
                                                      endDate: ""})
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }

  function handleInstitutionChange(e) {
    setEducationInfo({
      ...educationInfo,
      institution: e.target.value
    })
  }

  function handleLevelChange(e) {
    setEducationInfo({
      ...educationInfo,
      level: e.target.value
    })
  }

  function handleSubjectChange(e) {
    setEducationInfo({
      ...educationInfo,
      subject: e.target.value
    })
  }

  function handleGradeChange(e) {
    setEducationInfo({
      ...educationInfo,
      grade: e.target.value
    })
  }

  function handleStartDateChange(e) {
    setEducationInfo({
      ...educationInfo,
      startDate: e.target.value
    })
  }

  function handleEndDateChange(e) {
    setEducationInfo({
      ...educationInfo,
      endDate: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-field'>
        <label htmlFor="institution">Institution:</label>
        { !saved ? 
            (<input 
                id="title" 
                type="text"
                placeholder='eg Olympia University'
                value={educationInfo.institution} 
                onChange={handleInstitutionChange}
                required
              />
            ) : 
            (<span className='display-info'>{educationInfo.institution}</span>)
        }
      </div>
      <div className='input-field'>
        <label htmlFor="level">Level:</label>
        { !saved ? 
            (<input 
                id="level" 
                type="text" 
                placeholder='eg Undergraduate Degree'
                value={educationInfo.level} 
                onChange={handleLevelChange}
                required
              />
            ) : 
            (<span className='display-info'>{educationInfo.level}</span>)
        }
      </div>
      <div className='input-field'>
        <label htmlFor="subject">Subject:</label>
        { !saved ? 
            (<input 
                id="subject" 
                type="text"
                placeholder='eg Xenomorph Studies'
                value={educationInfo.subject} 
                onChange={handleSubjectChange}
                required
              />
            ) : 
            (<span className='display-info'>{educationInfo.subject}</span>)
        }
      </div>
      <div className='input-field'>
        <label htmlFor="grade">Grade:</label>
        { !saved ? 
            (<input 
                id="grade" 
                type="text"
                placeholder='eg 2.1'
                value={educationInfo.grade} 
                onChange={handleGradeChange}
                required
              />
            ) : 
            (<span className='display-info'>{educationInfo.grade}</span>)
        }
      </div>
      <div className='input-field'>
        <label className="date-label" htmlFor="startDate">Start Date:</label>
        { !saved ? 
            (<input 
                id="startDate" type="date" value={educationInfo.startDate} onChange={handleStartDateChange}/>) : 
            (<span className='display-info'>{educationInfo.startDate}</span>)
        }
      </div>
      <div className='input-field'>
        <label className="date-label" htmlFor="endDate">End Date:</label>
        { !saved ? 
            (<input id="endDate" type="date" value={educationInfo.endDate} onChange={handleEndDateChange}/>) : 
            (<span className='display-info'>{educationInfo.endDate}</span>)
        }
      </div>
      <button className="btn btn-dark">{!saved ? 'Save' : 'Edit'}</button>
    </form>
  )
}

export default Education;