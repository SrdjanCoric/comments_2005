const comments = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      const commentsWithoutReplies = action.payload.reduce((acc, comment) => {
        const { replies, ...commentWithoutReplies } = comment;
        return acc.concat(commentWithoutReplies);
      }, []);
      return commentsWithoutReplies;
    }
    case "COMMENT_ADDED": {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
};

export default comments;
