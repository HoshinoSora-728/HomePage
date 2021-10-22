import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = (todos: any | undefined) => (
  // const TodoList = () => {
  // const todos = useSelector((state: any) => state.todos);
  // {
  //   todos !== undefined ? "あり" : "なし"
  // });
  // {
  //   todos !== undefined ? (
  <ul className="todo-list">
    {todos?.map((todo: any) => (
      <Todo key={todo.id} {...todo}></Todo>
    ))}
  </ul>
  //   ) : (
  //     ""
  //   );
  // }
);

const mapStateToProps = (state: any) => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
