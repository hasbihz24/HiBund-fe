import { Container, Row, Col, Button } from "reactstrap";
function Join() {
    return (<Container className="mx-5 mt-4">
      <Row className="align-items-center">
        <Col md={6}>
          <img src="M3.png" alt="Join Us" className="img-fluid rounded" style={{ width: '90%' }}/>
        </Col>
        <Col md={5}>
          <h2 style={{ fontWeight: "700" }}>Mari gabung grub dan komunitas</h2>
          <p>
            Temukan komunitas yang hangat dan mendukung bagi setiap orang tua.
            Bersama-sama, kita dapat saling berbagi pengalaman, mendapatkan
            inspirasi, dan tumbuh bersama sebagai orang tua yang lebih baik.
          </p>
          <Button color="link" className="p-0">
            Baca Selengkapnya →
          </Button>
        </Col>
      </Row>
    </Container>);
}
export default Join;
