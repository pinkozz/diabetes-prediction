import React, { useState } from 'react';
import { Card, Form, FormGroup, Col, Button } from 'react-bootstrap';


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
      <FormGroup controlId="age">
        <Form.Label>Age (in years)</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={formData.age || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="sex">
        <Form.Label>Sex</Form.Label>
        <Form.Control
        
          type="text"
          name="sex"
          value={formData.sex || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="bmi">
        <Form.Label>BMI (Body Mass Index)</Form.Label>
        <Form.Control
          type="number"
          name="bmi"
          value={formData.bmi || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="bp">
        <Form.Label>Average Blood Pressure</Form.Label>
        <Form.Control
          type="number"
          name="bp"
          value={formData.bp || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="s1">
        <Form.Label>Total Serum Cholesterol (s1)</Form.Label>
        <Form.Control
          type="number"
          name="s1"
          value={formData.s1 || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="s2">
        <Form.Label>LDL (Low-Density Lipoproteins) (s2)</Form.Label>
        <Form.Control
          type="number"
          name="s2"
          value={formData.s2 || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="s3">
        <Form.Label>HDL (High-Density Lipoproteins) (s3)</Form.Label>
        <Form.Control
          type="number"
          name="s3"
          value={formData.s3 || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="s4">
        <Form.Label>Total Cholesterol / HDL (s4)</Form.Label>
        <Form.Control
          type="number"
          name="s4"
          value={formData.s4 || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="s5">
        <Form.Label>Possibly Log of Serum Triglycerides Level (s5)</Form.Label>
        <Form.Control
          type="number"
          name="s5"
          value={formData.s5 || ''}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup controlId="s6">
        <Form.Label>Blood Sugar Level (s6)</Form.Label>
        <Form.Control
          type="number"
          name="s6"
          value={formData.s6 || ''}
          onChange={handleChange}
        />
      </FormGroup>

      {/* Add more FormGroup for other input fields in the diabetes dataset */}

      <Button type="submit" style={{marginTop: '10px', justifyContent:"center"}}>Submit</Button>
    </Form>
    </Card.Body>
    </Card>
  );
};

export default InputForm;
