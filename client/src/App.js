import { useState, useEffect, useContext } from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";

function App() {
  return (
    <div>
      <Comments />
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
