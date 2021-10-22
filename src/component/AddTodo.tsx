import { useDispatch } from "react-redux";
import { addTodo } from "../core/action/index";

const AddTodo = () => {
  const dispatch = useDispatch();
  let input: any;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = input.value.trim();
          input.value = "";
          if (!text) {
            return;
          }
          console.log(text);

          dispatch(addTodo(text));
        }}
      >
        <input ref={(element) => (input = element)}></input>
        <button type="submit">追加する</button>
      </form>
    </div>
  );
};

export default AddTodo;
