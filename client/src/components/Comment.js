import moment from "moment";

const Comment = ({ author, body, postedAt }) => {
  return (
    <div class="comment">
      <hr />
      <div class="image">
        <img src="/images/no-user-image.gif" alt="" />
      </div>
      <div class="header">
        <h3 class="author">{author}</h3>
        <span>{moment(postedAt).fromNow()}</span>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
