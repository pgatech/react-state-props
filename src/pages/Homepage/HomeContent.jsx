import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeContent = () => {
    return(
        <Container>
            <Row className="justify-content-md-center pt-5">
                <Col md={6}>
                    <h1>Hello, Welcome to Page ReactJS</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quo architecto iste error, alias quis accusantium laboriosam porro ullam magni.</p>
                </Col>
                <Col md={4}>
                    <h1>Ini adalah Gambar</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeContent;