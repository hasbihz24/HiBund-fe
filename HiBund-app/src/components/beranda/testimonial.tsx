import { Container, Row, Col, Button } from "reactstrap";

function Testimonial() {
  return (
    <Container className="mx-5 mt-4 testimonial">
      <Row>
        <Col md={4}>
          <p className="font-pink fs-6">Testimoni</p>
          <h1 className="font" style={{ fontWeight: 700 }}>
            Lihat bagaimana pengalaman mereka
          </h1>
          <p className="fs-6 mt-4">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </p>
          <Row>
            <Col md={3}>
              <Button>
                <img src="arrow-left.svg" />
              </Button>
            </Col>
            <Col md={3}>
              <Button>
                <img src="arrow-right.svg" />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
}
export default Testimonial;
