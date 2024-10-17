import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState('')



  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder='Add task'
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
      />
      <button onClick={() => {
        if (inputValue) handleAddTodo(inputValue)
      }}>
        <i className='fa-solid fa-plus'></i>
      </button>
    </div>
  );
}
