import { useContext, useState } from "react";
import { addComment, CommentContext } from "../context/comments-context";

const AddCommentForm = () => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const { dispatch: commentsDispatch } = useContext(CommentContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ author, body }, commentsDispatch, resetInputs);
  };
  const resetInputs = () => {
    setAuthor("");
    setBody("");
  };
  return (
    <form action="" aria-label="form" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label htmlFor="author">Your Name</label>
        <input
          id="author"
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="body">Your Comment</label>
        <textarea
          id="body"
          name="body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentForm;
