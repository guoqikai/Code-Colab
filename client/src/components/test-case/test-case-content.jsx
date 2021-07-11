import { Container, Row, Col } from "react-bootstrap";
import UserLink from "../user-link";

const TestCaseDetailContent = ({ testCase, functionType }) => (
  <Container fluid className="p-0">
    {testCase.desc}
    <div className="small text-muted text-right mt-1">
      Submitted on {new Date(testCase.date).toDateString()} by{" "}
      <UserLink userInfo={testCase.userInfo} />, {testCase.numRuns} runs
    </div>
    <Row className="mt-2">
      <Col>
        <i className="bi bi-box-arrow-in-down" /> Inputs:
      </Col>
      <Col>
        <i className="bi bi-box-arrow-up" /> Expected Output:
      </Col>
      {testCase.actualOutput && <Col className="text-info">Actual Output:</Col>}
    </Row>
    <Row className="mt-2">
      <Col>
        {testCase.inputs.map((x, ind) => (
          <p key={ind}>{functionType.paramsType[ind].name + ": " + x}</p>
        ))}
      </Col>
      <Col>{testCase.expectedOutput}</Col>
      {testCase.actualOutput && <Col>{testCase.actualOutput}</Col>}
    </Row>
  </Container>
);

export default TestCaseDetailContent;
