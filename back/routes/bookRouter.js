const Router = require('express');
const router = new Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.create);
router.get('/', bookController.getAll);
router.delete('/:id', bookController.deleteOne);

module.exports = router;
