import { Container, Row, Col, Button } from "reactstrap";

function Footer() {
  return (
    <div className="footer-container mx-5 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <Row>
              <img src="logo-2.png" style={{ width: "80%", height: "" }} />
            </Row>
            <Row className="my-3">
              <p style={{ fontSize: "12px" }}>
                Temukan tips, panduan, dan komunitas yang mendukung perjalanan
                parenting Anda.
              </p>
            </Row>
          </Col>
          <Col md={3}></Col>
          <Col md={4} className="mt-2">
            <Row>
              <p style={{ fontSize: "14px", fontWeight: 700 }}>Company</p>
            </Row>
            <Row>
              <Col>
                <p style={{ fontSize: "13px" }}>About Us</p>
              </Col>
              <Col>
                <p style={{ fontSize: "13px" }}>Pricing</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ fontSize: "13px" }}>Partner program</p>
              </Col>
              <Col>
                <p style={{ fontSize: "13px" }}>Reviews</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ fontSize: "13px" }}>Career</p>
              </Col>
              <Col>
                <p style={{ fontSize: "13px" }}>Direct Mail Academy</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ fontSize: "13px" }}>Contact us</p>
              </Col>
              <Col>
                <p style={{ fontSize: "13px" }}>Success stories</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ fontSize: "13px" }}>Privacy Policy</p>
              </Col>
              <Col>
                <p style={{ fontSize: "13px" }}>Terms & conditions</p>
              </Col>
            </Row>
          </Col>
          <Col md={2} className="mt-2">
            <Row>
              <p style={{ fontSize: "14px", fontWeight: 700 }}>Contact</p>
            </Row>
            <Row>
              <p style={{ fontSize: "13px" }}>
                <img src="email.svg" /> amikom.ac.id
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
        </Row>
        <Row className="mt-5">
            <hr />
            <Col md={6}>
            <img src="logo-2.png" style={{ width: "20%", height: "" }} />
            <p className="my-2" style={{ fontSize: "12px", fontWeight: 700, color: "gray" }}>
            © 2024 • Romusa Proyek Pemograman Universitas Amikom Yogyakarta
            </p>
            </Col>
            <Col md={2}>
            </Col>
            <Col md={1}>
                <Button className="btn-white">
                    Login
                </Button>
            </Col>
            <Col md={3}>
                <Button className="btn-pink">
                    Coba Sekarang Gratis
                </Button>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
