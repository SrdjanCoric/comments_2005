import { useContext } from "react";
import { CommentContext, fetchReplies } from "../context/comments-context";
import Comment from "./Comment";

const CommentThread = ({ comment }) => {
  const { dispatch } = useContext(CommentContext);
  const handleMoreReplies = (e) => {
    e.preventDefault();
    fetchReplies(comment.id, dispatch);
  };
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies.length === comment.replies_count ? null : (
          <a href="/#" onClick={handleMoreReplies} className="show_more">
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
