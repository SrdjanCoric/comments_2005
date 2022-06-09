import comments from "./comments";
import replies from "./replies";

const rootReducer = (state = {}, action) => {
  return {
    comments: comments(state.comments, action),
    replies: replies(state.replies, action),
  };
};

export default rootReducer;

// store = {comments: [], replies: []}
