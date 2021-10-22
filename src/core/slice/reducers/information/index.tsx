const todos = (state: [], action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("pass");
      console.log(state);
      console.log(action.id);

      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      console.log("notpass");
      console.log(state);

      return state;
  }
};

export default todos;
