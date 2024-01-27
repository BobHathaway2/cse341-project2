const router = require('express').Router();
const dogsController = require('../controllers/dogs.js');

router.get('/:id', dogsController.getSingle);
router.get('/', dogsController.getAll);
router.post('/', dogsController.createDog);
router.put('/:id', dogsController.updateDog);
router.delete('/:id', dogsController.deleteDog);

module.exports = router;