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
    <>
      <h1>Personal Statement</h1>
      <form onSubmit={handleSubmit}>
        { !saved ? 
            (<p><textarea onChange={handleStatementChange} value={statement} placeholder="Say a little about yourself..."></textarea></p>) : 
            (<p>{statement}</p>)      
        }
        <button>{!saved ? 'Save' : 'Edit'}</button>
      </form>
    </>
  )
}

export { PersonalStatement };