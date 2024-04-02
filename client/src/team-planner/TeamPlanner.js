import React from 'react';
import './TeamPlanner.css';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSection from './LeftSection';
import MidSection from './MidSection';
import RightSection from './RightSection';


export default function TeamPlanner() {
    return (
        <Container fluid className="team-planner">
            <Row>
                <Col>
                    <LeftSection>
                    </LeftSection>
                </Col>
                <Col>
                    <MidSection>
                    </MidSection>
                </Col>
                <Col>
                    <RightSection>
                    </RightSection>
                </Col>
            </Row>
        </Container>
    );
}