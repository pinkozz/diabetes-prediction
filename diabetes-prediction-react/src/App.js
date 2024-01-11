// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
import PredictionResult from './components/PredictionResult';
import { Line } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [prediction, setPrediction] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleFormSubmit = async (formData) => {
    try {
      const res = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(res.data.prediction);
      setChartData(res.data.chartData);
      console.log(res);

      // Assuming the response contains both prediction and chart data

    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <InputForm onSubmit={handleFormSubmit} />
        </Col>
      </Row>

      <Row>
        <Col>
          {prediction && <PredictionResult prediction={prediction} />}
        </Col>
      </Row>

      <Row>
        <Col>
          {chartData && (
            <div>
              <h2>Perceptron Training Progress</h2>
              <Line data={chartData} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
