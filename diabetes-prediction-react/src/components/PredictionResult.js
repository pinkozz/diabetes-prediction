// src/components/PredictionResult.js
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const PredictionResult = ({ prediction }) => {
  return (
    <Container className="text-center">
      <h1 className="mx-auto">Prediction Result</h1>
      {prediction === 1 ? (
        <h2 className="mx-auto">The person is diabetic</h2>
      ) : (
        <h2 className="mx-auto">The person is not diabetic</h2>
      )}
    </Container>
  );
};

export default PredictionResult;
