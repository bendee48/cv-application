function AddButton({text, handleClick}) {
  return (
    <>
      <button className="btn btn-add" onClick={handleClick}>Add more {text}</button>
    </>
  )
}

export default AddButton;