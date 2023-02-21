import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import postData from '../component/postData';
import { CarContext } from '../App';

const EditMulti = () => {
  const [cars, setCars] = useContext(CarContext);
  const [sold, setSold] = useState(true);
  //create a new array for unique years
  const uniqueYears = [...new Set(cars.map((car) => car.year))];

  //handle submit
  //get select input value
  //map through car array and if car year matches input value
  //update sold status to opposite its current state
  const handleSubmit = (e) => {
    e.preventDefault();
    const model = Number(e.target[0].value);

    //set sold to opposite of sold value i.e false
    setSold(!sold);

    const statusUpdate = cars.map((car) => {
      if (car.year === model) {
        return { ...car, sold: sold };
      } else {
        return car;
      }
    });

    //define a option object for the HTTP put request
    const postOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(statusUpdate),
    };

    const url = `/api/${model}/${sold}`;

    //post http request to the following url using the post options
    //log any error
    //set cars to update car array
    postData(url, postOptions)
      .then((data) => console.log(JSON.stringify(data)))
      .catch((err) => console.log(err));
    setCars(statusUpdate);
  };

  //return a form with a select input allowing user to choose a year
  //button to submit form triggering the handle submit function
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Sold Status:</Form.Label>
          <Form.Select size="sm">
            {uniqueYears
              .sort((a, b) => {
                return a - b;
              })
              .map((year, index) => {
                return (
                  <option key={index}>
                    {cars.length === 0 ? '0000' : year}
                  </option>
                );
              })}
          </Form.Select>
        </Form.Group>
        <Button className="reset-btn" variant="outline-dark" type="submit">
          Change All
        </Button>
      </Form>
    </>
  );
};

export default EditMulti;
