import { Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tag from "../../components/tag";
import { mainPageSelectors } from "../../redux/selectors";
import { mainPageActions } from "../../redux/actions"; 
import "./tag-group.css";

const TagGroup = ({ tags }) => {
  const [isExpand, setExpand] = useState(false);
  const selectedTags = useSelector(mainPageSelectors.selectTags);
  const dispatch = useDispatch();

  const taggleTagGroup = () => setExpand(!isExpand);

  return (
    <Row>
      <Col
        className={`overflow-hidden ${isExpand ? "" : "tag-group-collapse"}`}
        xs={isExpand ? true : 10}
      >
        {tags.map((tag) => (
          <Tag
            className="m-1"
            name={tag.name}
            type={selectedTags.includes(tag.name) ? "selected" : "selectable"}
            info={tag.count}
            onClick={() => dispatch(mainPageActions.updateTag(tag.name))}
            key={tag.name}
          />
        ))}

        {isExpand ? (
          <Button
            variant="link"
            className="float-right text-dark"
            onClick={taggleTagGroup}
          >
            Collapse
          </Button>
        ) : null}
      </Col>
      {isExpand ? null : (
        <Col xs={2} className="text-right">
          <Button variant="link" className="p-0 text-dark" onClick={taggleTagGroup}>
            All Tags
          </Button>
        </Col>
      )}
    </Row>
  );
};

export default TagGroup;
