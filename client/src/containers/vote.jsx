import { useDispatch, useSelector, useStore } from "react-redux";
import { Container, Row } from "react-bootstrap";
import classNames from "classnames";
import { userActions } from "../redux/actions";
import { userSelectors } from "../redux/selectors";
import useToaster from "../common/hooks/useToaster";

const Vote = ({ subjectType, subjectId, numVotes, updateNumVotes }) => {
  const store = useStore();
  const { isUpvote } = useSelector((state) =>
    userSelectors.selectVote(state, subjectId)
  ) || {};
  const dispatch = useDispatch();
  const toaster = useToaster();

  const handleVote = (isUpvote) => {
    if (!userSelectors.selectLoggedIn(store.getState())) {
      toaster.makeToastWithId(
        "login",
        "login",
        "You need to loggin to vote on the " +
          subjectType.replace(/([A-Z])/g, " $1").toLowerCase() +
          "."
      );
      return;
    }
    dispatch(userActions.vote({ isUpvote, subjectType, subjectId }))
      .unwrap()
      .then(({numVotes}) => updateNumVotes(numVotes))
      .catch(err => {toaster.makeToastWithId("vote", "error", err.toString())});
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <i
          role="button"
          className={classNames("bi icon-md", {
            "bi-caret-up-fill colab-green ": isUpvote,
            "bi-caret-up": !isUpvote,
          })}
          onClick={() => handleVote(true)}
        ></i>
      </Row>
      <Row className="justify-content-center">
        <h5 className="m-0">{numVotes}</h5>
      </Row>
      <Row className="justify-content-center">
        <i
          role="button"
          className={classNames("bi icon-md", {
            "bi-caret-down-fill colab-green ": isUpvote === false,
            "bi-caret-down": isUpvote !== false,
          })}
          onClick={() => handleVote(false)}
        ></i>
      </Row>
    </Container>
  );
};

export default Vote;
