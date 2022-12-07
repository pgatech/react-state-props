import React from 'react';
import {Button, Container, Card, Col, Row} from 'react-bootstrap';

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
                      <Button variant="danger" type="submit" onClick={()=> props.remove(props.data.id)}>Remove</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Post;