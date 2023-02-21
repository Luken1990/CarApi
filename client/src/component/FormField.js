import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//form component which take in props to handle the input and submit
//set the values to the description value
//when user make change to input field run handle input function
//when user submit run handle submit function
function FormField({ handleInput, handleSubmit, description }) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="price"
            required
            value={description.price}
            placeholder="Enter a price:"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="make"
            required
            value={description.make}
            placeholder="Enter Make:"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="year"
            required
            value={description.year}
            placeholder="Enter Year:"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="reg"
            required
            value={description.reg}
            placeholder="Enter registration:"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="owner"
            required
            value={description.owner}
            placeholder="Enter owner:"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="img"
            required
            value={description.img}
            placeholder="Enter image url:"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="sold"
            required
            value={description.sold}
            placeholder="Sold status: true/false"
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormField;
