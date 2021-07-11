import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { fecthTopQuestions } from "../../common/api/question";
import { getAllTags } from "../../common/api/tag";
import Tag from "../../components/tag";

import logo from "../../assets/logo-big.png";
import WaitFor from "../../common/WaitFor";
import MainQuestionGroup from "./main-question-group";
import TagGroup from "./tag-group";
import ToolBar from "./tool-bar";
import MainQuestionGroupHeader from "./main-question-group-header";
import MainPagination from "./main-pagination";


const TopQuestionCardContent = ({
  questionTitle,
  questionDesc,
  numAnswers,
  numTestCases,
  questionTags,
  _id,
}) => (
  <>
    <Card.Body>
      <Card.Title component={Link}>
        <Link to={"question/" + _id} className="text-dark">
          {questionTitle}
        </Link>
      </Card.Title>
      <Card.Text>{questionDesc}</Card.Text>
      <Card.Text>
        {questionTags.map((tag) => (
          <Tag name={tag} className="mx-1" key={tag}/>
        ))}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-right small text-muted border-top-0 bg-white">
      {numAnswers} answers, {numTestCases} test cases
    </Card.Footer>
  </>
);

const MainPage = ({ topQuestions, tags, trending }) => {
  return (
    <Container className="py-5">
      <Row className="mb-2">
        <Col>
          <h4>Top Questions</h4>
        </Col>
      </Row>
      <CardDeck className="justify-content-center mb-5">
        <Card className="mx-3 px-0">
          <TopQuestionCardContent {...topQuestions[0]} />
        </Card>
        <Card className="mx-3 px-0">
          <TopQuestionCardContent {...topQuestions[1]} />
        </Card>
        <Card className="d-none d-lg-block mx-3 p-0">
          <TopQuestionCardContent {...topQuestions[2]} />
        </Card>
      </CardDeck>
      <Row>
        <Col lg={8} md>
          <Row className="mb-2">
            <Col>
              <MainQuestionGroupHeader />
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <TagGroup tags={tags} />
            </Col>
          </Row>
          <Row className="mt-4 mx-1">
            <Col>
              <ToolBar />
            </Col>
          </Row>
          <MainQuestionGroup/>
          <MainPagination className="mt-2" />
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <Card className="mx-1 p-0 mb-4 coontent-center">
            <Card.Body>
              <Card.Title>Trending</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mx-1 p-0 border-0 bg-">
            <Card.Img src={logo} className="p-5" />
          </Card>
          <Card className="mx-1 p-0">
            <Card.Body>
              <Card.Title>Contect Me</Card.Title>
              <Card.Text>Email: guosidney@gmail.com</Card.Text>
              <Card.Text>Linkedin: guoqikai</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const MainPageWithData = () => (
  <WaitFor resolve={(async () => {
    const topQuestions = await fecthTopQuestions();
    const tags = await getAllTags()
    return {topQuestions, tags}
  })} render={MainPage} pending={"waiting"}>
  </WaitFor>
);

export default MainPageWithData;
