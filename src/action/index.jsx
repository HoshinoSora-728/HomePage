let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const loadYoutube = (text) => ({
  type: "LOAD_DATA",
  id: nextTodoId++,
  text,
});
