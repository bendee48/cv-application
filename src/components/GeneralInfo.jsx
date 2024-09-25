import { useState } from 'react';

function GeneralInfo() {
  const [personalInfo, setPersonalInfo] = useState({name: '', email: '', phone: ''});
  const [saved, setSaved] = useState(false);

  function handleNameChange(e) {
    setPersonalInfo({
      ...personalInfo,
      name: e.target.value
    })
  }

  function handleEmailChange(e) {
    setPersonalInfo({
      ...personalInfo,
      email: e.target.value
    })
  }

  function handlePhoneChange(e) {
    setPersonalInfo({
      ...personalInfo,
      phone: e.target.value
    })
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='input-field'>
        <label htmlFor="name">Full Name:</label>
        { !saved ? 
            (<input 
                id="name" 
                type="text" 
                placeholder="eg Ellen Ripley"  
                value={personalInfo.name} 
                onChange={handleNameChange}
                minLength={3}
                maxLength={40}
                required
              />
            ) : 
            (<span>{personalInfo.name}</span>)
        }
      </div>
      <div className='input-field'> 
        <label htmlFor="email">Email:</label>
        { !saved ? 
            (<input 
                id="email" 
                type="email"
                placeholder='eg ellen@weyland-yutani.com'
                value={personalInfo.email} 
                onChange={handleEmailChange}
                maxLength={40} 
                required
              />
            ) : 
            (<span>{personalInfo.email}</span>)
        }
      </div>
      <div className='input-field'>
        <label htmlFor="phone">Phone:</label>
        { !saved ? 
            (<input 
                id="phone" 
                type="tel"
                placeholder='eg +445555 555 555'
                value={personalInfo.phone} 
                onChange={handlePhoneChange}
                required
              />
            ) : 
            (<span>{personalInfo.phone}</span>)
        }
      </div>
      <button className='btn'>{!saved ? 'Save' : 'Edit'}</button>
    </form>
  )
}

export default GeneralInfo;