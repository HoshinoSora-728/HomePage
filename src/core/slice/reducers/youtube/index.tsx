const youtube = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_LIST":
      console.log("slice");
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

export default youtube;
