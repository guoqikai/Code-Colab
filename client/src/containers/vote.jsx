import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import classNames from "classnames";
import useSafeAsyncCallbacks, {forward} from "../common/hooks/useSafeAsync";

// Both onUpvoteClick and onDownvoteClick should be async function, number of upvote will be updated when the proomise is resolved.
const Vote = ({ numUpvote, onUpvoteClick, onDownvoteClick }) => {
  // 1 when upvoted, -1 when downvoted.
  const [voteState, setVoteState] = useState(0);
  const callBackGroup = useSafeAsyncCallbacks({onUpvoteClick, onDownvoteClick})[0];

  const isUpvote = voteState === 1;
  const isDownvote = voteState === -1;


  return (
    <Container fluid>
      <Row className="justify-content-center">
        <i
          role="button"
          className={classNames("bi icon-md", {
            "bi-caret-up-fill colab-green ": isUpvote,
            "bi-caret-up": !isUpvote,
          })}
          onClick={() =>
            callBackGroup
              .onUpvoteClick()
              .then((val, err) => {
                if (!err) setVoteState(isUpvote ? 0 : 1);
                forward(val, err);
              })
              .catch((err) => {console.log(err)})
          }
        ></i>
      </Row>
      <Row className="justify-content-center">
        <h5 className="m-0">{parseInt(numUpvote) + voteState}</h5>
      </Row>
      <Row className="justify-content-center">
        <i
          role="button"
          className={classNames("bi icon-md", {
            "bi-caret-down-fill colab-green ": isDownvote,
            "bi-caret-down": !isDownvote,
          })}
          onClick={() =>
            callBackGroup
              .onDownvoteClick()
              .then((val, err) => {
                if (!err) setVoteState(isDownvote ? 0 : -1);
                forward(val, err);
              })
              .catch((err) => {})
          }
        ></i>
      </Row>
    </Container>
  );
};

export default Vote;
