const router = require('express').Router();
const dogsController = require('../controllers/dogs.js');
const validation = require('../middleware/validate');

router.get('/:id', dogsController.getSingle);
router.get('/', dogsController.getAll);
router.post('/', validation.saveDog, dogsController.createDog);
router.put('/:id', validation.saveDog, dogsController.updateDog);
router.delete('/:id', dogsController.deleteDog);

module.exports = router;