import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useState } from "react";
function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true }
  ]);

  const [currentTab, setCurrentTab] = useState('All')
  console.log('currentTab: ', currentTab);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
  }
  function handleEditTodo() {

  }
  function handleDeleteTodo() {

  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TodoList todos={todos} currentTab={currentTab} />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  );
}

export default App;
