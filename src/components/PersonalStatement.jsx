import { useState } from 'react';

function PersonalStatement() {
  const [statement, setStatement] = useState('');
  const [saved, setSaved] = useState(false);

  function handleStatementChange(e) {
    setStatement(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!saved) {
      setSaved(true)
    } else {
      setSaved(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      { !saved ? 
          (<textarea 
              className="text-area statement" 
              rows={10} 
              onChange={handleStatementChange} 
              value={statement} 
              placeholder="Say a little about yourself..."
              required
            >
            </textarea>) : 
          (<p className='display-info statement'>{statement}</p>)      
      }
      <button className='btn btn-dark'>{!saved ? 'Save' : 'Edit'}</button>
    </form>
  )
}

export default PersonalStatement;