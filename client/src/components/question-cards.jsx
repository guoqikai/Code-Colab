import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

const TopQuestionCardContent = ({
  questionTitle,
  questionDesc,
  numAnswers,
  numTestCases,
  questionTags,
}) => (
  <>
    <Card.Body>
      <Card.Title>{questionTitle}</Card.Title>
      <Card.Text>{questionDesc}</Card.Text>
      <Card.Text>
        {questionTags.map((tag) => (
          <Badge className="bg-dark mx-1">{tag}</Badge>
        ))}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="bg-dark text-white text-end">
      {numAnswers} answers, {numTestCases} test cases
    </Card.Footer>
  </>
);

const TopQuestionCards = ({ topQuestions }) => (
  <Container fluid>
    <CardDeck as={Row} className="justify-content-center">
      <Card as={Col} className="mx-2 p-0">
        <TopQuestionCardContent {...topQuestions[0]} />
      </Card>
      <Card as={Col} className="mx-2 p-0">
        <TopQuestionCardContent {...topQuestions[1]} />
      </Card>
      <Card as={Col} className="d-none d-md-block mx-2 p-0">
        <TopQuestionCardContent {...topQuestions[2]} />
      </Card>
    </CardDeck>
  </Container>
);

const QuestionCard = ({
  questionTitle,
  questionDesc,
  numAnswers,
  numTestCases,
  questionTags,
  opInfo,
  datePost,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>{questionTitle}</Card.Title>
      <Card.Text>{questionDesc}</Card.Text>
      <Card.Text>
        {questionTags.map((tag) => (
          <Badge className="bg-dark mx-1">{tag}</Badge>
        ))}
      </Card.Text>
      <Card.Text className="text-end text-muted">
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

const AllQuestionCards = ({allQuestions}) => {
    <CardColumns>
        {allQuestions.map(question => <QuestionCard {...question}/>)}
    </CardColumns>
}


