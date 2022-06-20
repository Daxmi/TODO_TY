import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo2";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos} : Props) => {
  return <div className="todos">
     {
      todos.map((todo, index) => (
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={index} />
      ))
     }
    </div>
}


export default TodoList;