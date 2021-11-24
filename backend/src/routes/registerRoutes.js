const router = require('express').Router();
const validate = require('../middleware/validations');
const registerController = require('../controllers/registerController');

router.get('/register', registerController.getAll);
router.post('/register', validate.createValidate, registerController.register);
router.put('/register', validate.updateValidate, registerController.update);
router.delete('/register', registerController.deleteRegister);

module.exports = router;
