const connection = require('./connection');

const registerExist = async (email) => {
  const db = await connection();
  const findEmail = await db.collection('users').findOne({ email });
  return findEmail;
};

const registerUser = async (name, email, password) => {
  const db = await connection();
  const register = await db.collection('users').insertOne({
    name, email, password,
  });
  return { user: { id: register.insertedId, name, email } };
};

const loginExist = async (email) => {
  const db = await connection();
  const findLogin = await db.collection('users').findOne({ email });
  return findLogin;
};

module.exports = {
  registerExist,
  registerUser,
  loginExist,
};
