import React, { useState } from 'react';

import './index.css';

import {
  Container, Row, Col,
} from 'react-bootstrap';

import Triangle from './components/Triangle';
import CalculatorForm from './components/CalculatorForm';

const App = () => {
  const initialTriangleSides = {
    base: 0,
    height: 0,
    hypothenuse: 0,
  };
  const [triangleSides, setTriangleSides] = useState(initialTriangleSides);

  return (
    <Container className='general-container'>
      <Row className='justify-content-md-center title-row'>
        <Col className='d-flex justify-content-center'>
          <h1 className='title'>Ode to the Pythagoreans</h1>
        </Col>
      </Row>
      <Row md={2} className='justify-content-md-center interactive-triangle-row'>
        <Col md={4} className='d-flex justify-content-center'>
          <Triangle
            triangleSides={triangleSides}
          />
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <CalculatorForm
            triangleSides={triangleSides}
            setTriangleSides={setTriangleSides}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
