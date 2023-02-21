const express = require('express');
const router = express.Router();

//import all CRUD controllers
const {
  create,
  findAll,
  findMax,
  remove,
  updateOne,
  updateAll,
} = require('../controllers/carController');

//get routes  - find all documents / find documents based on year input
router.get('/', findAll);
router.get('/:year', findMax);

//post routes
router.post('/cars', create);

//put routes - update one document / update multiple documents
router.put('/cars/:id', updateOne);
router.put('/:model/:sold', updateAll);

//delete routes
router.delete('/cars/:id', remove);

module.exports = router;
