import React, { useState, useContext } from 'react';
import postData from '../component/postData';
import FormField from './FormField';
import { CarContext } from '../App';

const InputForm = () => {
  const [cars, setCars] = useContext(CarContext);

  let initialState = {
    price: '',
    make: '',
    year: '',
    reg: '',
    owner: '',
    img: '',
    sold: false,
  };

  const [description, setDescription] = useState(initialState);

  //handle input from form
  //prevent default submit
  //change initial state to the target name and input value
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDescription({ ...description, [name]: value });
  };

  //define a option object for the HTTP post request
  const postOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(description),
  };

  //handle submit function
  //post http request to the following url using the post options
  //log any error
  //set description to initial state
  //set cars array to car and add additional item
  const handleSubmit = async (e) => {
    e.preventDefault();
    postData('/api/cars', postOptions)
      .then((data) => console.log(JSON.stringify(data)))
      .catch((err) => console.log(err));
    setDescription(initialState);
    setCars([...cars, description]);
    console.log(cars);
  };

  //return form and pass handle input, handle submit and an object as props
  return (
    <FormField
      description={description}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default InputForm;
