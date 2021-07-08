import { ButtonToolbar, ButtonGroup, DropdownButton, Dropdown, Container, Row, Col } from "react-bootstrap";
import { MinimalButton, Button, SwitchButton, MinimalSwitchButton } from "../../components/buttons";
import CommentGroup from "../comment-group";

const TestCaseGroup = () => {
  return (
    <Container fluid className="py-1">
      <Row>
        <Col className="p-2" xs={8}>
          <MinimalSwitchButton size="sm" className="mx-2" isSelected={true}>
            Most Runs
          </MinimalSwitchButton>
          <MinimalSwitchButton size="sm" className="mx-2">
            Most Upvotes
          </MinimalSwitchButton>
          <MinimalSwitchButton size="sm" className="mx-2">
            Test Cases Given by OP
          </MinimalSwitchButton>
        </Col>
        <Col className="p-2" xs={4}>
          <Button
            variant="outline-dark"
            size="sm"
            className="mx-2 float-right "
          >
            <i className="bi bi-plus-lg mr-1"></i> Add a test case
          </Button>
        </Col>
      </Row>
      <CommentGroup
        comments={[
          {
            replydTo: "user43dasd",
            comment: "hello!",
            _id: 1,
            userInfo: { _id: 12, name: "user42" },
          },
          {
            replyTo: "user42",
            comment: "hello!",
            userInfo: { _id: 12, name: "user43" },
            _id:2,
            date: new Date().toLocaleString()
          },
        ]}
      />
    </Container>
  );
};

export default TestCaseGroup;
