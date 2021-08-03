import { ButtonToolbar, ButtonGroup, DropdownButton, Dropdown, Container, Row, Col } from "react-bootstrap";
import { MinimalButton, Button, SwitchButton, MinimalSwitchButton } from "../../components/buttons";
import TestCaseDetailCard from "../test-case-detail-card";
import CommentGroup from "../comment-group";

const TestCaseGroup = () => {
  return (
    <Container fluid className="py-1">
      <Row>
        <Col className="my-2">
            <ButtonGroup>
          <SwitchButton size="sm" isSelected={true}>
            Most Runs
          </SwitchButton>
          <SwitchButton size="sm">
            Most Upvotes
          </SwitchButton>
          <SwitchButton size="sm">
            Test Cases Given by OP
          </SwitchButton>
          </ButtonGroup>
          <Button size="sm" className="mx-2 float-right">
            <i className="bi bi-plus-lg mr-1"></i> Add
          </Button>
        </Col>
      </Row>
      <div className="mt-2 mb-3">
        <TestCaseDetailCard
          testCase={{
            _id: 1,
            title: "test case 1",
            desc: "dewscrition here",
            date: new Date().toLocaleString(),
            userInfo: { _id: 12, name: "user43" },
            inputs: [],
            expectedOutput: "Hello",
          }}
        
          numVotes={2}
        />
      </div>
      <hr />
      <div className="mt-3">
        <TestCaseDetailCard
          testCase={{
              _id:2,
            title: "test case 1",
            desc: "dewscrition here",
            date: new Date().toLocaleString(),
            userInfo: { _id: 12, name: "user43" },
            inputs: [],
            expectedOutput: "Hello",
          }}
         
          numVotes={2}
        />
      </div>
    </Container>
  );
};

export default TestCaseGroup;
