import { Card, Row, Col, Container } from "react-bootstrap";
import TestCaseDetailContent from "../components/test-case/test-case-content";
import UserLink from "../components/user-link";
import CommentGroup from "./comment-group";
import Vote from "./vote";

const TestCaseDetailCard = ({ testCase, functionType, numVotes, comments }) => {
  const { _id, title } = testCase;
  return (
    <Container fluid>
      <Row>
        <Col xs={1}>
          <Vote subjectType="testCase" subjectId={_id} numVotes={numVotes} />
        </Col>
        <Col xs={11}>
          <h5>{title}</h5>
          <TestCaseDetailContent
            testCase={testCase}
            functionType={functionType}
          />
          <div className="mb-2"></div>
          <CommentGroup comments={comments} subjectId={_id} />
        </Col>
      </Row>
    </Container>
  );
};

export default TestCaseDetailCard