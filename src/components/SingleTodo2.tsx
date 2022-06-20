import React, { useState, useRef, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleSubmit = (e: React.FormEvent<EventTarget>, id: number) => {
    e.preventDefault();
    const newState = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: editTodo } : todo
    );
    setTodos(newState);
    setEdit(false);
  };

  const handleDone = (id: number) => {
    const newState = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(newState);
  };

  const handleDelete = (id: number) => {
    const newState = todos.filter((todo) => todo.id !== id);
    setTodos(newState);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={() => setEdit(!edit)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdFileDownloadDone />
        </span>
      </div>
    </form>
  );
};
export default SingleTodo;
