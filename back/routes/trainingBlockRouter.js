const Router = require('express');
const router = new Router();
const trainingBlockController = require('../controllers/trainingBlockController');

router.post('/', trainingBlockController.create);
router.get('/', trainingBlockController.getAll);
router.delete('/:id', trainingBlockController.deleteOne);

module.exports = router;
