import './App.css';

import { Container, Row, Col, Button } from 'react-bootstrap';
import TeamPlanner from './team-planner/TeamPlanner';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <p>This will be the topbar</p>
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <TeamPlanner></TeamPlanner>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
