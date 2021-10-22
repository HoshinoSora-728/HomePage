import { createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  name: "",
};

// const options = {
//   method: "GET",
//   url: "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDAFW44cRSCgB7rYplcjRHh2kr8oy1Rscg&part=snippet,contentDetails,statistics,status",
//   headers: {},
// };

// Sliceを生成する
const slice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    setName: (state, action) => {
      return Object.assign({}, state, { name: action.payload });
    },
    clearName: (state) => {
      return Object.assign({}, state, { name: "" });
    },
    // etc...
  },
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setName, clearName } = slice.actions;
