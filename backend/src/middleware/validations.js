/* eslint-disable consistent-return */
const Joi = require('joi');

const tableUser = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  github_user: Joi.string().required(),
  cep: Joi.number().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  street: Joi.string().required(),
  num: Joi.number().required(),
  complement: Joi.string().allow('').required(),
});

const tableUpdateUser = Joi.object({
  _id: Joi.string().required(),
  id: Joi.number().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  github_user: Joi.string().required(),
  cep: Joi.number().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  street: Joi.string().required(),
  num: Joi.number().required(),
  complement: Joi.string().allow('').required(),
});

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

const createValidate = async (req, res, next) => {
  const { error } = tableUser.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

const updateValidate = async (req, res, next) => {
  const { error } = tableUpdateUser.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  registerValidate,
  loginValidate,
  createValidate,
  updateValidate,
};
