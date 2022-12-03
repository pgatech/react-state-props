import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Post = (props) => {
  return (
    <Container>
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card className="m-3">
                    <Card.Img variant="top" src="https://placeimg.com/200/150/tech" />
                    <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>{props.data.body}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Post;