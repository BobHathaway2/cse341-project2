const router = require('express').Router();
const { carsValidationRules, validate } = require('../validator.js')
const carsController = require('../controllers/cars.js');

router.get('/:id', carsController.getSingle);
router.get('/', carsController.getAll);
router.post('/', carsValidationRules, validate, carsController.createContact);
router.put('/:id', carsValidationRules, validate, carsController.updateContact);
router.delete('/:id', carsController.deleteContact);

module.exports = router;
