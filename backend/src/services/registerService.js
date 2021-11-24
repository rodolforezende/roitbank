const registerModel = require('../models/registerModel');

const registerUsers = async (data) => {
  const result = registerModel.registerCreate(data);
  return result;
};

const getAllRegister = async () => {
  const result = registerModel.allRegister();
  return result;
};

const updateRegister = async ({ _id: dataId, ...data }) => {
  const result = await registerModel.updateRegister(dataId, data);
  if (!result) {
    return {
      message: 'Register not found',
    };
  }
  return result;
};

const deleteRegister = async (id) => {
  const result = await registerModel.excludeRegister(id);
  return result;
};

module.exports = {
  registerUsers,
  getAllRegister,
  updateRegister,
  deleteRegister,
};
