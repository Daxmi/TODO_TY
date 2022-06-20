import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField2";
import TodoList from "./components/TodoList2";
import { Todo } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Todo</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
