import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;
  const tab = "All";
  const filterTodoList = tab === 'All' ? todos :
                         tab === 'Open' ? todos.filter((todo) => !todo.complete) :
                         tab === 'Completed' ? todos.filter((todo) => !todo.complete) : []

  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return <TodoCard
                    key={todoIndex}
                    todoIndex={todoIndex}
                    todo={todo} />;
      })}
    </>
  );
}
