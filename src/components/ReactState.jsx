import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReactState () {
  return (
    <Container>
    <Row>
        <Col>
            <Button variant="primary m-3">Primary</Button>
        </Col>
    </Row>
    </Container>
  );
}

export default ReactState;