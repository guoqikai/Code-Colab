import { Container, Row, Col, Tab, Tabs, Button } from "react-bootstrap";
import Tag from "../../components/tag";
import Vote from "../vote";
import TestCaseGroup from "./test-case-group";

const QuestionDetailPage = ({ questionTitle, questionDesc }) => (
  <Container className="py-4">
    <Row>
      <Col>
        <h4>Question Title {questionTitle}</h4>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col xs={1}>
        <Vote
          numVotes={0}
          onDownvoteClick={() =>
            new Promise((resolve, reject) => {
              setTimeout(() => resolve(), 2000);
            })
          }
          onUpvoteClick={() =>
            new Promise((resolve, reject) => {
              setTimeout(() => resolve(), 2000);
            })
          }
        />
      </Col>
      <Col xs={11}>
        <Row>
          <Col>
            You are given two non-empty linked lists representing two
            non-negative integers. The digits are stored in reverse order, and
            each of their nodes contains a single digit. Add the two numbers and
            return the sum as a linked list.
          </Col>
        </Row>
        <Row>
          <Col>
            <Tag name="dss" />
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Button variant="link" className="p-0 text-muted mr-2 focus-min">
              <small>Answer this question</small>
            </Button>
            <Button variant="link" className="p-0 text-muted mr-2 focus-min">
              <small>Edit description</small>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Tabs
      className="my-2"
      defaultActiveKey="test-cases"
      transition={false}
    >
      <Tab eventKey="test-cases" title="Test Cases" tabClassName="text-dark">
        <TestCaseGroup />
      </Tab>
      <Tab
        eventKey="answers"
        title="Answers and Discussions"
        tabClassName="text-dark"
      ></Tab>
    </Tabs>
  </Container>
);

export default QuestionDetailPage;
