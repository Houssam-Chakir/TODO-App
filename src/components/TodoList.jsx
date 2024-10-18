import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, currentTab, handleCompleteTodo, handleDeleteTodo } = props;

  const filterTodoList = currentTab === 'All' ? todos :
                         currentTab === 'Open' ? todos.filter((todo) => !todo.complete) :
                         currentTab === 'Completed' ? todos.filter((todo) => todo.complete) : []

  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return <TodoCard
                    key={todoIndex}
                    todoIndex={todos.findIndex(val => val.input === todo.input)}
                    todo={todo}
                    {...props} />;

      })}
    </>
  );
}
