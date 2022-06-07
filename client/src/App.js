import { useState, useEffect } from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";
import axios from "axios";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get("/api/comments");
      setComments(data);
    };
    fetchComments();
  }, []);

  const handleMoreReplies = async (id) => {
    const { data } = await axios.get(`/api/comment_replies?comment_id=${id}`);
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return Object.assign({}, comment, {
            replies: comment.replies.concat(data),
          });
        } else {
          return comment;
        }
      })
    );
  };

  const handleSubmit = async (newComment, callback) => {
    try {
      const { data } = await axios.post("/api/comments", { ...newComment });
      setComments(comments.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Comments comments={comments} onMoreReplies={handleMoreReplies} />
      <AddCommentForm onSubmit={handleSubmit} />
    </div>
  );
}
// App
// Comments
// CommentThread
// Comment
// AddCommentForm

export default App;
