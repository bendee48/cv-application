function AddButton({text, handleClick}) {
  return (
    <>
      <button className="btn" onClick={handleClick}>Add more {text}</button>
    </>
  )
}

export default AddButton;