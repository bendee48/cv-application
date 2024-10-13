import { useState } from 'react';

function Experience() {
  const [experienceInfo, setExperienceInfo] = useState({title: "", 
                                                        company: "", 
                                                        startDate: "", 
                                                        endDate: "",
                                                        inRole: false,
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

  function handleInRoleChange(e) {
    setExperienceInfo({
      ...experienceInfo,
      inRole: e.target.checked
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
            (<span className='display-info'>{experienceInfo.title}</span>)
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
            (<span className='display-info'>{experienceInfo.company}</span>)
        }
      </div>
      <div className='input-field'>
        <label className="date-label" htmlFor="startDate">Start Date:</label>
        { !saved ? 
            (<input 
                id="startDate" 
                type="date" 
                value={experienceInfo.startDate} 
                onChange={handleStartDateChange}
                required
              />
            ) : 
            (<span className='display-info'>{experienceInfo.startDate}</span>)
        }
      </div>
      { !experienceInfo.inRole ? 
        (
          <div className='input-field'>
            <label className="date-label" htmlFor="endDate">End Date:</label>
            { !saved ? 
                (<input 
                    id="endDate" 
                    type="date" 
                    value={experienceInfo.endDate} 
                    onChange={handleEndDateChange}
                    required
                  />
                ) : 
                (<span className='display-info'>{experienceInfo.endDate}</span>)
            }
          </div>
        ) : ( null )
      }
      <div className='input-field'>
        { !saved ? (
            <>
              <label htmlFor="currentRole">Current role?</label>
              <input 
                id="currentRole" 
                type="checkbox" 
                checked={experienceInfo.inRole}
                onChange={handleInRoleChange}
              />
            </>
        ) : saved && experienceInfo.inRole ? (
              <span className="in-role">Currently In Role</span>
        ) : (null) }
      </div>
      <div className='statement'>
        {/* <label htmlFor="description">Description:</label> */}
        { !saved ? 
          (
            <textarea 
              className='text-area'
              onChange={handleDescriptionChange} 
              value={experienceInfo.description} 
              placeholder="Write a short paragraph describing your role and achievements."
              cols={40}
              rows={10}
              required
            >
            </textarea>
          ) : 
          (<p className='display-info'>{experienceInfo.description}</p>)      
        }
      </div>
      <button className='btn btn-dark'>{!saved ? 'Save' : 'Edit'}</button>
    </form>
  )
}

export { Experience };