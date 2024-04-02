import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function LeftSection() {
    return (
        <Container>
            <Row>
                <Col>
                    <p>
                        This is the left section!
                    </p>
                </Col>  
            </Row>
            <Row>
                <Col>
                    <p>
                        This is also in the left section, just lower!
                    </p>
                </Col>  
            </Row>
        </Container>
    );
}