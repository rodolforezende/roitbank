const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const emailExists = async (email) => {
  const verifyEmail = await userModel.registerExist(email);
  return verifyEmail;
};

const registerUser = async ({ name, email, password }) => {
  const setUser = await userModel.registerUser(name, email, password);
  return setUser;
};

const loginUser = async ({ email, password }) => {
  const existLogin = await userModel.loginExist(email);
  if (!existLogin) {
    return { message: 'Email or password incorrect' };
  }
  if (password !== existLogin.password) {
    return { message: 'Email or password incorrect' };
  }
  const id = '_id';
  const token = jwt.sign({
    id: existLogin[id],
    name: existLogin.name,
    email: existLogin.email,
  }, process.env.TOKEN_SECRET);

  return { token };
};

module.exports = {
  emailExists,
  registerUser,
  loginUser,
};
