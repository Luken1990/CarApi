const mongoose = require('mongoose');

//set the database and type of data
const carsSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  reg: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  sold: {
    type: Boolean,
    required: true,
  },
});

//export schema
module.exports = mongoose.model('Cars', carsSchema);
