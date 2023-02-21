import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { CarContext } from '../App';

const SearchField = (prop) => {
  const [cars, setCars] = useContext(CarContext);

  //asynchronous function to get a api and return a json response
  //input the target value into the http url to retrieve the corresponding data
  //set state to api response
  const handleMax = async (e) => {
    let year = e.target.value;
    const response = await fetch(`/api/${year}`);
    const carApi = await response.json();
    setCars(carApi);
  };

  //create a new array for unique years
  const uniqueYears = [...new Set(cars.map((car) => car.year))];

  //return a form allowing user to select years of cars in which to display
  //map through each array item
  //return a option for each year
  //on change return the cars corresponding with the year
  //reset button to return all car in api
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Max model:</Form.Label>
          <Form.Select size="sm" onChange={handleMax}>
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
        <Button
          className="reset-btn"
          variant="outline-dark"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            prop.carApi();
          }}
        >
          Reset
        </Button>
      </Form>
    </>
  );
};

export default SearchField;
