const router = require('express').Router();
const dogsController = require('../controllers/dogs.js');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/:id', validation.checkMongoId, dogsController.getSingle);
router.get('/', dogsController.getAll);
router.post('/', isAuthenticated, validation.saveDog, dogsController.createDog);
router.put('/:id', isAuthenticated, validation.checkMongoId, validation.saveDog, dogsController.updateDog);
router.delete('/:id', isAuthenticated, validation.checkMongoId, dogsController.deleteDog);

module.exports = router;