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
    <div>
      <h1>Details</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          { !saved ? 
              (<input id="name" type="text" value={personalInfo.name} onChange={handleNameChange}/>) : 
              (<span>{personalInfo.name}</span>)
          }
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          { !saved ? 
              (<input id="email" type="email" value={personalInfo.email} onChange={handleEmailChange}/>) : 
              (<span>{personalInfo.email}</span>)
          }
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          { !saved ? 
              (<input id="phone" type="tel" value={personalInfo.phone} onChange={handlePhoneChange}/>) : 
              (<span>{personalInfo.phone}</span>)
          }
        </div>
        <button>{!saved ? 'Save' : 'Edit'}</button>
      </form>
    </div>
  )
}

export { GeneralInfo }