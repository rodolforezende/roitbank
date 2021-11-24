/* eslint-disable consistent-return */
const Joi = require('joi');

const registerValidate = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().required().min(5).max(50),
    password: Joi.string().required().min(5).max(200),
  });

  const validateEmail = /^\w+@\w+.com(.br)?$/.test(req.body.email);

  if (!validateEmail) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

const loginValidate = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required().min(5).max(50),
    password: Joi.string().required().min(5).max(200),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

module.exports = {
  registerValidate,
  loginValidate,
};
