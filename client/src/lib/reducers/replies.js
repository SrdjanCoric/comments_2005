const replies = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      // action.payload == comments
      const replies = action.payload.reduce((acc, comment) => {
        const { replies } = comment;
        return acc.concat(replies);
      }, []);
      return replies;
    }
    case "REPLIES_RECEIVED": {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
};

export default replies;
