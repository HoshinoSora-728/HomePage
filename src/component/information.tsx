import { useEffect } from "react";
// import store from "../stores";
// import axios from "axios";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

// import { Provider } from "react-redux";
// import store from "../stores/index";
// import { connect } from "formik";

// const options = {
//   method: "GET",
//   url: "https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyDAFW44cRSCgB7rYplcjRHh2kr8oy1Rscg&part=snippet",
//   headers: {},
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const Information = () => {
  useEffect(() => {
    console.log("初期表示");
    // console.log(store.getState());
  }, []);

  return (
    <>
      <h2>Information</h2>
      <div>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    </>
  );
};

export default Information;
