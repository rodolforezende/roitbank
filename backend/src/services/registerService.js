const registerModel = require('../models/registerModel');

const registerUsers = async (data) => {
  const result = registerModel.registerCreate(data);
  return result;
};

const updateRegister = async (data) => {
  const result = await registerModel.updateRegister(data);
  if (!data) {
    return {
      message: 'register not found',
    };
  }
  return result;
};

const deleteRegister = async (id) => {
  await registerModel.excludeRegister(id);
};

module.exports = {
  registerUsers,
  updateRegister,
  deleteRegister,
};
