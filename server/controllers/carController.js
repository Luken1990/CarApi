const Car = require('../models/carsSchema');

//Crud Operations

//function takes a http request and response
//create a new car using body response
//save new car
//log any errors
const create = async (req, res) => {
  const newCar = new Car({
    price: req.body.price,
    make: req.body.make,
    year: req.body.year,
    reg: req.body.reg,
    owner: req.body.owner,
    img: req.body.img,
    sold: req.body.sold,
  });

  try {
    await newCar.save();
    res.status(200).json({ message: 'Car Added' });
  } catch (err) {
    console.log(err);
  }
};

//function to find all document in database and return it
const findAll = async (req, res) => {
  Car.find((err, cars) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error occurred' });
    } else {
      res.send(cars);
    }
  });
};

//function takes a http request and response
//find the return the documents that matches the params year
const findMax = async (req, res) => {
  const maxYears = await Car.find({ year: { $lte: req.params.year } });
  res.send(maxYears);
};

//function takes a http request and response
//find the document that matches the id
//remove it
const remove = async (req, res) => {
  const car = await Car.findById(req.params.id);
  await car.remove();
  res.status(200).json({ message: 'Delete cars' });
};

//function takes a http request and response
//find the document that matches the id
//update document with param body
const updateOne = async (req, res) => {
  const car = await Car.findById(req.params.id);
  await Car.findByIdAndUpdate(car, req.body);
  res.status(200).json({ message: 'Update cars' });
};

//function takes a http request and response
//will update all documents with the year specified by params
//change sold data to state specified by params
const updateAll = async (req, res) => {
  const state = req.params.sold;
  await Car.updateMany({ year: req.params.model }, { sold: state });
  res.status(200).json({ message: 'Update all Sold state' });
};

//export all crud functions
module.exports = {
  create,
  findAll,
  findMax,
  remove,
  updateOne,
  updateAll,
};
