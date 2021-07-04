import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tag from "./tag";

const QuestionCard = ({
  questionTitle,
  questionDesc,
  numAnswers,
  numTestCases,
  questionTags,
  opInfo,
  datePost,
  _id
}) => (
  <Card className="rounded-0 border-dark border-top-0 border-right-0 border-left-0">
    <Card.Body>
      <Card.Title>
        <Link to={"question/" + _id} className="text-dark">
          {questionTitle}
        </Link>
      </Card.Title>
      <Card.Text>{questionDesc}</Card.Text>
      <Card.Text>
        {questionTags.map((tag) => (
          <Tag className="mx-1" name={tag} key={tag}/>
        ))}
      </Card.Text>
      <Card.Text className="text-right text-muted">
        <small>
          Asked by <a href={"/user/" + opInfo.uid}>{opInfo.username}</a> on{" "}
          {datePost}
        </small>
        <br />
        <small>
          {numAnswers} answers, {numTestCases} test cases
        </small>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default QuestionCard;
