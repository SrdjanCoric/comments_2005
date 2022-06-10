import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/comments/comments";
import replyReducer from "../features/replies/replies";

const store = configureStore({
  reducer: {
    comments: commentReducer,
    replies: replyReducer,
  },
});

export default store;
/*
// Store
// {
    products: [],
    cart: [],
    loading: false
//}

// action
     {type: "PRODUCTS_RECEIVED", payload: {products, loading}}

// action creator -> function that returns an object (action)

  dispatch
     sending an action to the store (calling all reducer function)

  reducer - function

  When you dispatch an action ALL reducers are called

  const products = (state, action) => {
    switch(action.type) {
      case "PRODUCTS_RECEIVED"
    }
  }

  const cart = (state, action) => {
    switch(action.type) {
      default: {
        return state
      }
    }
  }
*/
