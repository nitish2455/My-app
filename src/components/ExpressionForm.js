import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ExpressionForm = () => {
  const [expressions, setExpressions] = useState([]);
  const [connectorType, setConnectorType] = useState('AND');
  const [newExpression, setNewExpression] = useState({
    ruleType: 'Age',
    operator: '>=',
    value: '',
    score: '',
  });

  const addExpression = () => {
    setExpressions([...expressions, { ...newExpression }]);
    setNewExpression({
      ruleType: 'Age',
      operator: '>=',
      value: '',
      score: '',
    });
  };

  const deleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const output = {
      rules: expressions.map((expression) => ({
        key: expression.ruleType.toLowerCase(),
        output: {
          value: Number(expression.value),
          operator: expression.operator,
          score: Number(expression.score),
        },
      })),
      combinator: connectorType.toLowerCase(),
    };

    console.log('Form Submitted with Output:', output);
    
  };

  return (
    <Form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 p-4 border border-gray-500">
      {/* Connector Type */}
      <Form.Group controlId="connectorType">
        <Form.Label className="text-lg font-bold">Connector Type</Form.Label>
        <Form.Control
          as="select"
          value={connectorType}
          onChange={(e) => setConnectorType(e.target.value)}
          className="p-2 mt-2 border rounded mx-4"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </Form.Control>
      </Form.Group>

      {/* Expressions */}
      {expressions.map((expression, index) => (
        <Row key={index} className="mb-3">
          <Col>
            <Form.Control
            className='border border-black mt-2 p-1'
              as="select"
              value={expression.ruleType}
              onChange={(e) => {
                const updatedExpressions = [...expressions];
                updatedExpressions[index].ruleType = e.target.value;
                setExpressions(updatedExpressions);
              }}
            >
              <option value="Age">Age</option>
              <option value="CreditScore">Credit Score</option>
              <option value="AccountBalance">Account Balance</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
             className='border border-black mt-1 p-1'
              as="select"
              value={expression.operator}
              onChange={(e) => {
                const updatedExpressions = [...expressions];
                updatedExpressions[index].operator = e.target.value;
                setExpressions(updatedExpressions);
              }}
            >
              <option value=">">{'>'}</option>
              <option value="<">{'<'}</option>
              <option value=">=">{'>='}</option>
              <option value="<=">{'<='}</option>
              <option value="=">{'='}</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
            className='border border-black mt-1 p-1'
            placeholder='Add Value...'
              type="text"
              value={expression.value}
              onChange={(e) => {
                const updatedExpressions = [...expressions];
                updatedExpressions[index].value = e.target.value;
                setExpressions(updatedExpressions);
              }}
            />
          </Col>
          <Col>
            <Form.Control
             className='border border-black mt-1 p-1'
             placeholder='Add Score....'
              type="text"
              value={expression.score}
              onChange={(e) => {
                const updatedExpressions = [...expressions];
                updatedExpressions[index].score = e.target.value;
                setExpressions(updatedExpressions);
              }}
            />
          </Col>
          <Col>
            <Button
              variant="danger"
              onClick={() => deleteExpression(index)}
              className="px-4 py-2 mt-2 border border-black font-bold bg-gray-300"
            >
              Delete
            </Button>
          </Col>
        </Row>
      ))}

      {/* Add Button */}
      <div className="flex space-x-2 mt-4">
        <Button variant="primary" onClick={addExpression} className="px-4 py-2 font-bold  border border-black bg-gray-300">
          Add Expression
        </Button>
      </div>

      {/* Submit Button */}
      <Button variant="success" type="submit" className="mt-4 px-6 py-2 font-bold border border-black bg-gray-300">
        Submit
      </Button>
    </Form>
  );
};

export default ExpressionForm;
