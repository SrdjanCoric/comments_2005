import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { commentAdded } from "../actions/commentActions";
import { addComment } from "../features/comments/comments";

const AddCommentForm = () => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newComment = { author, body };
      dispatch(addComment({ newComment, callback: resetInputs }));
    } catch (e) {
      console.error(e);
    }
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
