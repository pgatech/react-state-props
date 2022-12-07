import React from 'react';
import {Button, Container, Card} from 'react-bootstrap';

const Post = (props) => {
  return (
    <Container>
                <Card className="m-3">
                    <Card.Img variant="top" src="https://placeimg.com/200/150/tech" />
                    <Card.Body>
                      <Card.Title>{props.data.title}</Card.Title>
                      <Card.Text>{props.data.body}</Card.Text>
                      <Button variant="danger" type="submit" onClick={()=> props.remove(props.data.id)}>Remove</Button>
                      <Button variant="primary" type="submit" className="m-3" onClick={()=> props.update(props.data)}> Update </Button>
                    </Card.Body>
                </Card>
    </Container>
  );
}

export default Post;