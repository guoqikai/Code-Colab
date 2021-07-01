import { Col, Row, ButtonGroup, ButtonToolbar, Button, Badge, InputGroup, FormControl} from "react-bootstrap";
import { useState } from "react";
import "./toolbars.css"

const TagGroup = ({ tags }) => {
  const [isExpand, setExpand] = useState(false); 

  const taggleTags = () => setExpand(!isExpand);
  return (
    <Row className="my-2">
      <Col
        className={`overflow-hidden ${
          isExpand ? "" : "toolbar-tag-group-collapse"
        }`}
        xs={isExpand ? true : 10}
      >
        {tags.map((tag) => (
          <Badge 
            className={
              tag.isSelected
                ? "colab-bg-green text-dark toolbar-tag m-1"
                : "bg-white text-dark toolbar-tag m-1"
            }
          >
            {tag.name}
            <Badge className="bg-dark ms-2">
              {tag.count}
            </Badge>
          </Badge>
        ))}

        {isExpand ? (
          <Button
            variant="link"
            className="float-end text-dark"
            onClick={taggleTags}
          >
            Collapse
          </Button>
        ) : null}
      </Col>
      {isExpand ? null : (
        <Col xs={2} className="text-end">
          <Button variant="link" className="p-0 text-dark" onClick={taggleTags}>
            All Tags
          </Button>
        </Col>
      )}
    </Row>
  );
};

const SortBy = () => (
  <Row className="mt-4 mb-2">
    <ButtonToolbar as={Col} className="justify-content-between">
      <ButtonGroup className="float-end">
        <Button variant="outline-dark">Hot</Button>
        <Button className="colab-bg-green text-dark border-dark ">Newest</Button>
        <Button variant="outline-dark">Top</Button>
      </ButtonGroup>

      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search"
          className="bg-white text-dark border-dark"
        />
      </InputGroup>
    </ButtonToolbar>
  </Row>
);


export {TagGroup, SortBy};