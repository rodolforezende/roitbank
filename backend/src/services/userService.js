const userModel = require('../models/userModel');

const emailExists = async (email) => {
  const verifyEmail = await userModel.registerExist(email);
  return verifyEmail;
};

const registerUser = async (name, email, password) => {
  const setUser = await userModel.registerUser(name, email, password);
  return setUser;
};

const loginUser = async (email, password) => {
  const existLogin = await userModel.loginExist(email, password);
  return existLogin;
};

module.exports = {
  emailExists,
  registerUser,
  loginUser,
};
