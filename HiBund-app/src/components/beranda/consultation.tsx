import { Container, Row, Col, Button } from "reactstrap";

function Consultation() {
  return (
    <Container className="mx-5 mt-4">
      <Row className="align-items-center">
        <Col md={5}>
          <h1 style={{ fontWeight: "700" }}>Konsultasikan dengan para ahli</h1>
          <p>
            Tidak perlu menghadapi tantangan parenting sendirian. Kami
            menyediakan layanan konsultasi langsung dengan para ahli untuk
            membantu Anda menemukan solusi yang tepat untuk setiap masalah
            parenting yang Anda hadapi.
          </p>
          <Button color="link" className="p-0">
            Baca Selengkapnya →
          </Button>
        </Col>
        <Col md={5} className="mx-5 mt-3">
          <img
            src="hybridwork.png"
            alt="Consultation session"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Consultation;
