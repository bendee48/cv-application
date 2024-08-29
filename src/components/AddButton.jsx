function AddButton({text, handleClick}) {
  return (
    <>
      <button onClick={handleClick}>Add more {text}</button>
    </>
  )
}

export default AddButton;