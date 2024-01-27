const router = require('express').Router();
const carsController = require('../controllers/cars.js');

router.get('/:id', carsController.getSingle);
router.get('/', carsController.getAll);
router.post('/', carsController.createCar);
router.put('/:id', carsController.updateCar);
router.delete('/:id', carsController.deleteCar);

module.exports = router;
