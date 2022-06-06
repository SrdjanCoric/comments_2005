import { useState, useEffect } from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";
import data from "./lib/comments";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);

  return (
    <div>
      <Comments comments={comments} />
      <AddCommentForm />
    </div>
  );
}
// App
// Comments
// CommentThread
// Comment
// AddCommentForm

export default App;
