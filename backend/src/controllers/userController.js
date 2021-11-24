const userService = require('../services/userService');

const userRegister = async (req, res) => {
  try {
    const emailAlreadyExist = await userService.emailExists(req.body.email);
    if (emailAlreadyExist) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const result = await userService.registerUser(req.body);
    if (result.message) {
      return res.status(400).json(result);
    }
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: 'Something is wrong' });
  }
};

const userLogin = async (req, res) => {
  try {
    const result = await userService.loginUser(req.body);
    if (result.message) {
      return res.status(400).json(result);
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
