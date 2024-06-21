import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
function Content() {
    return (<Container className='mx-5 mt-4'>
      <Row className="align-items-center">
        <Col md={4}>
          <h2 style={{ fontWeight: '700' }}>Brainstorming</h2>
          <p>
            Unleash creative ideas and build on them with the help of sticky notes,
            images, mind maps, videos, drawing capabilities — the list goes on..
          </p>
          <Button color="link" className="p-0">Baca Selengkapnya →</Button>
        </Col>
        <Col md={7}>
          <img src="Brainstorm.png" alt="Brainstorming session" className="img-fluid rounded"/>
        </Col>
      </Row>
    </Container>);
}
;
export default Content;
