const router = require('express').Router();
const carsController = require('../controllers/cars.js');
const validation = require('../middleware/validate');

router.get('/:id', validation.checkMongoId, carsController.getSingle);
router.get('/', carsController.getAll);
router.post('/', validation.saveCar, carsController.createCar);
router.put('/:id', validation.checkMongoId, validation.saveCar, carsController.updateCar);
router.delete('/:id', validation.checkMongoId, carsController.deleteCar);

module.exports = router;
