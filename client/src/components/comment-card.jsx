import { Card } from "react-bootstrap";
import UserLink from "./user-link";

const CommentCard = ({ replyTo, comment, userInfo, date, onReplyClick }) => (
  <Card className="border-0">
    <Card.Body className="p-2 text-md">
      {replyTo && (
        <span className="mr-3 text-muted">
          <i className="bi bi-arrow-up" /> @{replyTo}
        </span>
      )}
      {comment}
      <span className="text-muted">
        {" -"}
        <UserLink {...userInfo} /> on {date}{" "}
        <i role="button" className="bi bi-reply" onClick={onReplyClick} />
      </span>
    </Card.Body>
  </Card>
);

export default CommentCard;
