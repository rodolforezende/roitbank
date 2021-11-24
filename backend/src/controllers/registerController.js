const registerService = require('../services/registerService');

const register = async (req, res) => {
  try {
    const data = req.body;
    const result = await registerService.registerUsers(data);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json('Something is wrong');
  }
};

const getAll = async (req, res) => {
  try {
    const result = await registerService.getAllRegister();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json('Something is wrong');
  }
};

const update = async (req, res) => {
  try {
    const data = req.body;
    const result = await registerService.updateRegister(data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json('Something is wrong');
  }
};

const deleteRegister = async (req, res) => {
  try {
    const { _id: dataId } = req.body;
    const result = await registerService.deleteRegister(dataId);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json('Something is wrong');
  }
};

module.exports = {
  register,
  getAll,
  update,
  deleteRegister,
};
