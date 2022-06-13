import { createContext, useReducer } from "react";
import axios from "axios";

export const CommentContext = createContext();

const commentsReducer = (state, action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      return action.payload;
    }
    case "REPLIES_RECEIVED": {
      return state.map((c) => {
        if (c.id === action.payload.commentId) {
          return Object.assign({}, c, {
            replies: c.replies.concat(action.payload.replies),
          });
        } else {
          return c;
        }
      });
    }
    case "COMMENT_ADDED": {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
};

export const fetchComments = async (dispatch) => {
  const { data } = await axios.get("/api/comments");
  dispatch({ type: "COMMENTS_RECEIVED", payload: data });
};

export const fetchReplies = async (id, dispatch) => {
  const { data } = await axios.get(`/api/comment_replies?comment_id=${id}`);
  dispatch({
    type: "REPLIES_RECEIVED",
    payload: { replies: data, commentId: id },
  });
};

export const addComment = async (newComment, dispatch, callback) => {
  const { data } = await axios.post("/api/comments", { ...newComment });
  dispatch({ type: "COMMENT_ADDED", payload: data });
  if (callback) {
    callback();
  }
};

export const CommentProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  return (
    <CommentContext.Provider value={{ comments, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};
