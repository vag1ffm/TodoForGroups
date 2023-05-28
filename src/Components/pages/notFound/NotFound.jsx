import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col>
                    <h1 className="text-center">404</h1>
                    <p className="text-center">Page Not Found</p>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
