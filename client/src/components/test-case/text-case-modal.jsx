import { Modal } from "react-bootstrap";
import classNames from "classnames";

class TestCaseModal {
  mapStatus(status) {
    if (status === "pass") {
      return (
        <h6 className="text-white bg-success ml-3 p-1 rounded">Passed </h6>
      );
    }
    if (status === "fail") {
      return <h6 className="text-white bg-danger ml-3 p-1 rounded">Failed </h6>;
    }
    if (status === "running") {
      return (
        <h6 className="text-white bg-secondary ml-3 p-1 rounded">Running </h6>
      );
    }
    return null;
  }

  render() {
    const { testCase, functionType, onHide } = this.props;
    if (!testCase) {
      return null;
    }
    return (
      <Modal
        size={testCase.actualOutput ? "lg" : "md"}
        show={true}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <h5>Test Case: {testCase.name} </h5>
          {this.mapStatus(testCase.status)}
        </Modal.Header>

        <Modal.Body>
          <TestCaseViewLarge
            testCase={testCase}
            functionType={functionType}
            isModal={true}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default TestCaseModal