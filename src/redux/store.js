import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./counterSlide";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})