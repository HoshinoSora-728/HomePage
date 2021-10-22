import React from "react";
import { useSelector } from "react-redux";
import Todos from "./toDo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <Todos key={todo.id} {...todo}></Todos>
      ))}
    </ul>
  );
};

export default TodoList;
