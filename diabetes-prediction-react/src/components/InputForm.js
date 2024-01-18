import React, { useState } from 'react';
import { Card, Form, FormGroup, Button } from 'react-bootstrap';

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <Card.Header>Diabetes Prediction</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="Pregnancies">
            <Form.Label>Pregnancies</Form.Label>
            <Form.Control
              type="number"
              name="Pregnancies"
              value={formData.Pregnancies || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup controlId="Glucose">
            <Form.Label>Glucose</Form.Label>
            <Form.Control
              type="number"
              name="Glucose"
              value={formData.Glucose || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup controlId="BloodPressure">
            <Form.Label>Blood Pressure</Form.Label>
            <Form.Control
              type="number"
              name="BloodPressure"
              value={formData.BloodPressure || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup controlId="SkinThickness">
            <Form.Label>Skin Thickness</Form.Label>
            <Form.Control
              type="number"
              name="SkinThickness"
              value={formData.SkinThickness || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup controlId="Insulin">
            <Form.Label>Insulin</Form.Label>
            <Form.Control
              type="number"
              name="Insulin"
              value={formData.Insulin || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup controlId="BMI">
            <Form.Label>BMI (Body Mass Index)</Form.Label>
            <Form.Control
              type="number"
              name="BMI"
              value={formData.BMI || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup controlId="DiabetesPedigreeFunction">
            <Form.Label>Diabetes Pedigree Function</Form.Label>
            <Form.Control
              type="number"
              name="DiabetesPedigreeFunction"
              value={formData.DiabetesPedigreeFunction || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup controlId="Age">
            <Form.Label>Age (in years)</Form.Label>
            <Form.Control
              type="number"
              name="Age"
              value={formData.Age || ''}
              onChange={handleChange}
            />
          </FormGroup>

          <Button type="submit" style={{ marginTop: '10px', justifyContent: "center" }}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default InputForm;
