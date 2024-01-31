const router = require('express').Router();
const carsController = require('../controllers/cars.js');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/:id', validation.checkMongoId, carsController.getSingle);
router.get('/', carsController.getAll);
router.post('/', isAuthenticated, validation.saveCar, carsController.createCar);
router.put('/:id', isAuthenticated, validation.checkMongoId, validation.saveCar, carsController.updateCar);
router.delete('/:id', isAuthenticated, validation.checkMongoId, carsController.deleteCar);

module.exports = router;
