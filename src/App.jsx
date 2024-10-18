import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useState, useEffect } from "react";
function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]
  const [todos, setTodos] = useState([{ input: "Hello! Add your first todo!", complete: true }]);

  const [currentTab, setCurrentTab] = useState("All");
  console.log("currentTab: ", currentTab);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveTodos(newTodoList)
  }
  function handleCompleteTodo(index) {
    const newTodoList = [...todos];
    newTodoList.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.complete = true;
      }
    });
    setTodos(newTodoList);
    handleSaveTodos(newTodoList)
  }
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveTodos(newTodoList)
  }

  function handleSaveTodos(currentTodos) {
    localStorage.setItem("todo-app-react", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app-react")) {
      return;
    }
    console.log('localstorage');
    let db = JSON.parse(localStorage.getItem("todo-app-react"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TodoList todos={todos} currentTab={currentTab} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
