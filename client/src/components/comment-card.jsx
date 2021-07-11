import { Card } from "react-bootstrap";
import UserLink from "./user-link";

const CommentCard = ({ replyTo, comment, userInfo, date, onReplyClick }) => (
    <div className="text-md py-2">
      {replyTo && (
        <span className="mr-3 text-muted">
          <i className="bi bi-arrow-up" /> @{replyTo}
        </span>
      )}
      {comment}
      <span className="text-muted">
        {" -"}
        <UserLink userInfo={userInfo} /> on {date}{" "}
        <i role="button" className="bi bi-reply" onClick={onReplyClick} />
      </span>
    </div>
);

export default CommentCard;
