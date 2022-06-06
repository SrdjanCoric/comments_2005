import Comment from "./Comment";

const CommentThread = ({ comment }) => {
  return (
    <div class="parent-comment">
      <Comment {...comment} />
      <div class="replies">
        {comment.replies.map((reply) => {
          return <Comment {...reply} />;
        })}
        <a href="#" class="show_more">
          Show More Replies (2)
        </a>
      </div>
    </div>
  );
};

export default CommentThread;
