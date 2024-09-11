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
    <form onSubmit={handleSubmit}>
      <div className='input-field'>
        <label htmlFor="title">Title:</label>
        { !saved ? 
            (<input 
                id="title" 
                type="text"
                placeholder='eg Warrant Officer'
                value={experienceInfo.title} 
                onChange={handleTitleChange}
                required
              />
            ) : 
            (<span>{experienceInfo.title}</span>)
        }
      </div>
      <div className='input-field'>
        <label htmlFor="company">Company:</label>
        { !saved ? 
            (<input 
                id="company" 
                type="text" 
                placeholder='eg Weyland-Yutani Corporation'
                value={experienceInfo.company} 
                onChange={handleCompanyChange}
                required
              />
            ) : 
            (<span>{experienceInfo.company}</span>)
        }
      </div>
      <div className='input-field'>
        <label htmlFor="startDate">Start Date:</label>
        { !saved ? 
            (<input 
                id="startDate" 
                type="date" 
                value={experienceInfo.startDate} 
                onChange={handleStartDateChange}
                required
              />
            ) : 
            (<span>{experienceInfo.startDate}</span>)
        }
      </div>
      <div className='input-field'>
        <label htmlFor="endDate">End Date:</label>
        { !saved ? 
            (<input 
                id="endDate" 
                type="date" 
                value={experienceInfo.endDate} 
                onChange={handleEndDateChange}
              />
            ) : 
            (<span>{experienceInfo.endDate}</span>)
        }
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        { !saved ? 
          (
            <textarea 
              className='text-area'
              onChange={handleDescriptionChange} 
              value={experienceInfo.description} 
              placeholder="Write a short paragraph describing your role and achievements."
              cols={40}
              rows={10}
            >
            </textarea>
          ) : 
          (<p>{experienceInfo.description}</p>)      
        }
      </div>
      <button>{!saved ? 'Save' : 'Edit'}</button>
    </form>
  )
}

export { Experience };