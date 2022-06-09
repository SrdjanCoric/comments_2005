import { useSelector } from "react-redux";
import Comment from "./Comment";
import axios from "axios";
import { repliesReceived } from "../actions/replyActions";
import { useDispatch } from "react-redux";

const CommentThread = ({ comment }) => {
  const dispatch = useDispatch();
  const handleMoreReplies = async (e) => {
    e.preventDefault();
    const id = comment.id;
    const { data } = await axios.get(`/api/comment_replies?comment_id=${id}`);
    // {type: "REPLIES_RECEIVED", payload: data}
    dispatch(repliesReceived(data));
  };
  let replies = useSelector((state) => state.replies).filter(
    (r) => r.comment_id === comment.id
  );
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {replies.length === comment.replies_count ? null : (
          <a href="/#" onClick={handleMoreReplies} className="show_more">
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
