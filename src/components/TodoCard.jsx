export function TodoCard(props) {
  const { todoIndex, todo, handleCompleteTodo, handleDeleteTodo } = props;
  console.log("todo: ", todo);

  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='todo-buttons'>
        {/* //Done button */}
        <button disabled={todo.complete} onClick={() => {
          handleCompleteTodo(todoIndex)
        }}>
          <h6>Done</h6>
        </button>
        {/* //Delete button */}
        <button onClick={() => {handleDeleteTodo(todoIndex)}}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
