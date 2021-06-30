import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Badge,
  CardColumns,
  ButtonGroup,
  Button
} from "react-bootstrap";

const MainPage = (props) => {
  return (
    <Container className="p-5">
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
              <Badge className="bg-dark mx-1">Algorithm</Badge>
              <Badge className="bg-dark mx-1">Python</Badge>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="bg-dark text-white text-end">
            255 answers, 18 test cases
          </Card.Footer>
        </Card>
        <Card as={Col} className="mx-3 p-0">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card as={Col} className="d-none d-lg-block mx-3 p-0">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Row>
        <Col lg={8} md>
          <Row className="mb-2">
            <h5>All Questions</h5>
          </Row>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
          <CardColumns>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img src="holder.js/100px160" />
            </Card>
            <Card className="text-end">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="rounded-0">
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
          nkjknknjkjnkjn
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
