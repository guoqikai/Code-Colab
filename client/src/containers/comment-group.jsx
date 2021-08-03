import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { forward, useSafeAsyncCallback } from "../common/hooks/useSafeAsync";
import { MinimalButton } from "../components/buttons";
import CommentCard from "../components/comment-card";
import {
  addComment as addCommentApi,
  loadComments,
} from "../common/api/comment";
import { userSelectors } from "../redux/selectors";
import useToaster from "../common/hooks/useToaster";
import WaitFor from "../common/WaitFor";

const CommentGroup = ({ subjectId, comments, setComments }) => {
  const isLoggedIn = useSelector(userSelectors.selectLoggedIn);
  const [replyTo, setReplyTo] = useState(null);
  const [curComment, setCurComment] = useState(null);
  const toaster = useToaster();

  const addComment = useSafeAsyncCallback(addCommentApi)[0];

  const validateComment = (comment) =>
    comment === "" ? "Comment cannot be empty." : null;

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
          <Form.Group>
            <Form.Label className="text-md">
              Reply to {replyTo === "" ? "author" : replyTo} :
            </Form.Label>
            <Form.Control
              isInvalid={validateComment(curComment)}
              placeholder="comment here"
              as="textarea"
              rows={3}
              className="focus-light"
              onChange={(e) => setCurComment(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {validateComment(curComment)}
            </Form.Control.Feedback>
          </Form.Group>
          <MinimalButton
            size="sm"
            className="mr-3"
            onClick={() => {
              if (!curComment) setCurComment("");
              else
                addComment(subjectId, replyTo, curComment)
                  .then(([comments, err]) => {
                    if (err) {
                      forward([null, err]);
                      return;
                    }
                    setComments(comments);
                    setReplyTo(null);
                    setCurComment(null);
                  })
                  .catch((err) => toaster.makeToast("error", err));
            }}
          >
            Reply
          </MinimalButton>
          <MinimalButton
            size="sm"
            onClick={() => {
              setReplyTo(null);
              setCurComment(null);
            }}
          >
            Cancel
          </MinimalButton>
        </Form>
      ) : (
        <MinimalButton
          className="p-2"
          size="sm"
          onClick={() => {
            if (!isLoggedIn)
              toaster.makeToastWithId(
                "login",
                "login",
                "You need to loggin to add a comment!"
              );
            else setReplyTo("");
          }}
        >
          Add a comment
        </MinimalButton>
      )}
    </div>
  );
};

const CommentGroupPending = () => (
  <div className="text-muted small">
    <hr />
    Loading comments...
  </div>
);

const commentGroupError = ({ reload }) => (
  <div className="colab-error small">
    <hr />
    Failed to load comments, click{" "}
    <MinimalButton onClick={() => reload()} size="sm">
      here
    </MinimalButton>{" "}
    to reload.
  </div>
);

const LinkedCommentGroup = ({ subjectId }) => (
  <WaitFor
    resolve={loadComments}
    mapResolvedValToProps={(comments) => ({ comments })}
    mapHooksToProps={(reload, setComments) => ({
      reload,
      setComments,
    })}
    args={[subjectId]}
    render={CommentGroup}
    pending={CommentGroupPending}
    error={commentGroupError}
    subjectId={subjectId}
  />
);

export default LinkedCommentGroup;
