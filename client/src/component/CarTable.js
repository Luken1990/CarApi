import Button from 'react-bootstrap/Button';
import * as AiIcons from 'react-icons/ai';
import EditItem from './EditItem';
import postData from '../component/postData';
import React, { useContext } from 'react';
import { CarContext } from '../App';
import 'animate.css';

const CarTable = () => {
  const [cars, setCars] = useContext(CarContext);

  //filter cars array
  //if the car id does not match the input id return it
  const handleDelete = async (id) => {
    const filteredCars = cars.filter((car) => car._id !== id);

    //define a option object for the HTTP delete request
    const deleteOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filteredCars),
    };

    //post http request to the following url using the post options
    //log any error
    //set car state to filtered cars array
    postData(`/api/cars/${id}`, deleteOptions)
      .then((data) => console.log(JSON.stringify(data)))
      .catch((err) => console.log(err));

    setCars(filteredCars);
  };

  //return a table component
  //map through the car array and for each item
  //return a table row containing the car data
  return (
    <div>
      {cars.map((car, index) => {
        const { _id, make, price, year, reg, owner, img, sold } = car;
        return (
          <div key={index} className="car animate__animated animate__fadeInUp">
            <div className="info">
              <h5>{make}</h5>
              <p>£{price}</p>
              <small>
                {year} | {reg} | {owner}
              </small>
              <div className="btn-container">
                <Button
                  variant="outline-dark"
                  onClick={() => handleDelete(_id)}
                >
                  <AiIcons.AiOutlineDelete />
                </Button>
                <EditItem carId={car} />
              </div>
            </div>
            <figure>
              {sold ? <div className="sold">Sold</div> : null}
              <img src={img} alt="" />
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default CarTable;
