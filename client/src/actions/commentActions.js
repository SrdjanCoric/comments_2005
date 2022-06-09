export const commentsReceived = (comments) => {
  return { type: "COMMENTS_RECEIVED", payload: comments };
};

export const commentAdded = (newComment) => {
  return { type: "COMMENT_ADDED", payload: newComment };
};
