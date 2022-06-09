import CommentThread from "./CommentThread";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsReceived } from "../actions/commentActions";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get("/api/comments");
      // dispatch({type: "COMMENTS_RECEIVED", payload: data})
      dispatch(commentsReceived(data));
    };
    fetchComments();
  }, [dispatch]);
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
