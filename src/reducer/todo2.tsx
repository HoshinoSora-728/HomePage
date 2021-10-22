const todos2 = (state = [], action: any) => {
  switch (action.type) {
    case "LOAD_DATA":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default todos2;
