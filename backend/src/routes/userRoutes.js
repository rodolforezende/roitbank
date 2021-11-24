const router = require('express').Router();
const userContoller = require('../controllers/userController');
const validations = require('../middleware/validations');

router.post('/register', validations.registerValidate, userContoller.userRegister);
router.post('/login', validations.loginValidate, userContoller.userLogin);

module.exports = router;
