const router = require('express').Router();
const dogsController = require('../controllers/dogs.js');
const validation = require('../middleware/validate');

router.get('/:id', validation.checkMongoId, dogsController.getSingle);
router.get('/', dogsController.getAll);
router.post('/', validation.saveDog, dogsController.createDog);
router.put('/:id', validation.checkMongoId, validation.saveDog, dogsController.updateDog);
router.delete('/:id', validation.checkMongoId, dogsController.deleteDog);

module.exports = router;