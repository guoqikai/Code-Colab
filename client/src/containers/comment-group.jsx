import { Fragment, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { MinimalButton } from "../components/buttons";
import CommentCard from "../components/comment-card";
import UserLink from "../components/user-link";

const CommentGroup = ({ comments, onComment }) => {
  const [replyTo, setReplyTo] = useState(null);
  const [comment, setComment] = useState(null);

  return (
    <div>
      {comments.map((comment) => (
        <Fragment key={comment._id}>
          <CommentCard
            onReplyClick={() => setReplyTo(comment.userInfo.name)}
            {...comment}
          ></CommentCard>
          <hr className="m-0" />
        </Fragment>
      ))}
      {replyTo !== null ? (
        <Form noValidate className="p-2">
          <Form.Group hasValidation>
            <Form.Label className="text-md">
              Reply to {replyTo === "" ? "author" : replyTo} :
            </Form.Label>
            <Form.Control
              isInvalid={comment === ""}
              placeholder="comment here"
              as="textarea"
              rows={3}
              className="focus-light"
              onChange={(e) => setComment(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Comment cannot be empty.
            </Form.Control.Feedback>
          </Form.Group>
          <MinimalButton
            size="sm"
            className="mr-3"
            onClick={() => {
              if (!comment) setComment("");
              else onComment(comment);
            }}
          >
            Reply
          </MinimalButton>
          <MinimalButton
            size="sm"
            onClick={() => {
              setReplyTo(null);
              setComment(null);
            }}
          >
            Cancel
          </MinimalButton>
        </Form>
      ) : (
        <MinimalButton className="p-2" size="sm" onClick={() => setReplyTo("")}>
          Add a comment
        </MinimalButton>
      )}
    </div>
  );
};

export default CommentGroup;
