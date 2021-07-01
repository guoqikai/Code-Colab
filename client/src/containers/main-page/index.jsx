import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Badge,
  CardColumns,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { TagGroup, SortBy } from "./toolbars";
import logo from "../../common/assets/logo-big.png";


const MainPage = (props) => {
  return (
    <Container className="py-5">
      <Row className="mb-2">
        <h5>Top Questions</h5>
      </Row>
      <CardDeck as={Row} className="justify-content-center mb-5">
        <Card as={Col} className="mx-3 p-0">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>
              <Badge className="text-dark mx-1">Algorithm</Badge>
              <Badge className="text-dark mx-1">Python</Badge>
            </Card.Text>
            <Card.Text className="text-end small text-muted">
              255 answers, 18 test cases
            </Card.Text>
          </Card.Body>
        </Card>
        <Card as={Col} className="mx-3 p-0">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>
              <Badge className="bg-dark mx-1">Algorithm</Badge>
              <Badge className="bg-dark mx-1">Python</Badge>
            </Card.Text>
            <Card.Text className="text-end small text-muted">
              255 answers, 18 test cases
            </Card.Text>
          </Card.Body>
        </Card>
        <Card as={Col} className="d-none d-lg-block mx-3 p-0">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>
              <Badge className="bg-dark mx-1">Algorithm</Badge>
              <Badge className="bg-dark mx-1">Python</Badge>
            </Card.Text>
            <Card.Text className="text-end small text-muted">
              255 answers, 18 test cases
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <Row>
        <Col lg={8} md>
          <Row className="mb-2">
            <h5>All Questions</h5>
          </Row>
          <TagGroup
            tags={[
              { name: "Python", count: 23 },
              { isSelected: true, name: "Algorithm", count: 54 },
              { name: "List", count: 11 },
              { name: "Linked", count: 11 },
              { name: "Python", count: 23 },
              { name: "Java", count: 2 },
              { name: "Cpp", count: 23 },
              { name: "Algorithm", count: 54 },
              { name: "Python", count: 23 },
              { isSelected: true, name: "Algorithm", count: 54 },
              { name: "Python", count: 23 },
              { isSelected: true, name: "Algorithm", count: 54 },
              { name: "Python", count: 23 },
              { isSelected: true, name: "Algorithm", count: 54 },
              { name: "Python", count: 23 },
              { isSelected: true, name: "Algorithm", count: 54 },
              { name: "Python", count: 23 },
              { isSelected: true, name: "Algorithm", count: 54 },
              { name: "Python", count: 23 },
              { isSelected: true, name: "Algorithm", count: 54 },
            ]}
          />
          <SortBy />
          <CardColumns>
            <Card className="rounded-0 border-top-0 border-start-0 border-end-0 ">
              <Card.Body>
                <Card.Title>How to create a mock</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <Badge className="bg-dark mx-1">Algorithm</Badge>
                <Badge className="bg-dark mx-1">Python</Badge>
                <Card.Text className="text-end text-muted">
                  <small>
                    Asked by <a href="/">user42</a>
                  </small>
                  <br /> <small>Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="rounded-0 border-top-0 border-start-0 border-end-0 ">
              <Card.Body>
                <Card.Title>How to create a mock</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <Badge className="bg-dark mx-1">Algorithm</Badge>
                <Badge className="bg-dark mx-1">Python</Badge>
                <Card.Text className="text-end text-muted">
                  <small>
                    Asked by <a href="/">user42</a>
                  </small>
                  <br /> <small>Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <Card className="mx-1 p-0 mb-4">
            <Card.Body>
              <Card.Title>Trending</Card.Title>
              <Card.Text>1</Card.Text>
              <Card.Text>2</Card.Text> <Card.Text>3</Card.Text>
              <Card.Text>4</Card.Text> <Card.Text>6</Card.Text>
              <Card.Text>7</Card.Text> <Card.Text>8</Card.Text>
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

export default MainPage;
