import React from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../../action";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddTodo = () => {
  let input;
  const dispatch = useDispatch();

  // const handleChange_input = (e)  =>{
  //  input= e.target.input
  // }
  // };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const text = input.value.trim();
          input.value = "";
          if (!text) {
            return;
          }
          console.log(text); // 確認用
          dispatch(addTodo(text));
        }}
      >
        {/* <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="input"
          // onChange={handleChange_input()}
          ref={(element) => (input = element)}
        /> */}
        <input ref={(element) => (input = element)} />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
