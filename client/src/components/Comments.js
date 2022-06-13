import { useEffect, useContext } from "react";
import CommentThread from "./CommentThread";
import { CommentContext } from "../context/comments-context";
import { fetchComments } from "../context/comments-context";
const Comments = () => {
  const { comments, dispatch: commentsDispatch } = useContext(CommentContext);

  useEffect(() => {
    fetchComments(commentsDispatch);
  }, [commentsDispatch]);
  return (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <CommentThread key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
