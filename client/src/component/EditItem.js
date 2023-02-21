import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as AiIcons from 'react-icons/ai';
import FormField from './FormField';
import postData from '../component/postData';
import { CarContext } from '../App';

function EditItem(prop) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cars, setCars] = useContext(CarContext);

  //useState to set initial value to prop object
  const [description, setDescription] = useState(prop.carId);
  const { _id } = description;

  //handle input from form
  //prevent default submit
  //change initial state car to the target name and input value
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDescription({ ...description, [name]: value });
  };

  //define a option object for the HTTP put request
  const putOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(description),
  };

  //map through the car array
  //if item id matches description id
  //assign description to item
  //else return item

  const updatedList = cars.map((item) =>
    item._id === description._id ? (item = description) : item
  );

  //handle submit function
  //post http request to the following url using the post options
  //log any error
  //set car state to updatedList array
  //set show to false to close modal
  const handleSubmit = async (e) => {
    e.preventDefault();
    postData(`/api/cars/${_id}`, putOptions)
      .then((data) => console.log(JSON.stringify(data)))
      .catch((err) => console.log(err));

    setCars(updatedList);
    setShow(false);
  };

  //return bootstrap modal with an input form
  //pass handle input, handle submit and an object as props
  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        <AiIcons.AiOutlineEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cars</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormField
            description={description}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditItem;
