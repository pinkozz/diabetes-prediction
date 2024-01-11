// src/components/PredictionResult.js
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const PredictionResult = ({ prediction }) => {
  return (
    
      <Container>
        <h1>Prediction Result</h1>
        <p>{prediction}</p>
      </Container>
    
  );
};

export default PredictionResult;
