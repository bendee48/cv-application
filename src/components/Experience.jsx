import { useState } from 'react';

function Experience() {
  const [experienceInfo, setExperienceInfo] = useState({title: "", 
                                                        company: "", 
                                                        startDate: "", 
                                                        endDate: "", 
                                                        description: ""});
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }

  function handleTitleChange(e) {
    setExperienceInfo({
      ...experienceInfo,
      title: e.target.value
    })
  }

  function handleCompanyChange(e) {
    setExperienceInfo({
      ...experienceInfo,
      company: e.target.value
    })
  }

  function handleStartDateChange(e) {
    setExperienceInfo({
      ...experienceInfo,
      startDate: e.target.value
    })
  }

  function handleEndDateChange(e) {
    setExperienceInfo({
      ...experienceInfo,
      endDate: e.target.value
    })
  }

  function handleDescriptionChange(e) {
    setExperienceInfo({
      ...experienceInfo,
      description: e.target.value
    })
  }

  return (
    <>
      <h1>Experience</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          { !saved ? 
              (<input id="title" type="text" value={experienceInfo.title} onChange={handleTitleChange}/>) : 
              (<span>{experienceInfo.title}</span>)
          }
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          { !saved ? 
              (<input id="company" type="text" value={experienceInfo.company} onChange={handleCompanyChange}/>) : 
              (<span>{experienceInfo.company}</span>)
          }
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          { !saved ? 
              (<input id="startDate" type="date" value={experienceInfo.startDate} onChange={handleStartDateChange}/>) : 
              (<span>{experienceInfo.startDate}</span>)
          }
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          { !saved ? 
              (<input id="endDate" type="date" value={experienceInfo.endDate} onChange={handleEndDateChange}/>) : 
              (<span>{experienceInfo.endDate}</span>)
          }
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          { !saved ? 
            (<p>
              <textarea 
                onChange={handleDescriptionChange} 
                value={experienceInfo.description} 
                placeholder="Write at least 3 bullet points describing your role. Focus on your achievements.">
              </textarea>
             </p>) : 
            (<p>{experienceInfo.description}</p>)      
          }
        </div>
        <button>{!saved ? 'Save' : 'Edit'}</button>
      </form>
    </>
  )
}

export { Experience };