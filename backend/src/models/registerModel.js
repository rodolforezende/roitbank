const connection = require('./connection');

const registerCreate = async (data) => {
  const {
    id, name, age, github, cep, state, city, district, street, num, comp,
  } = data;
  const db = await connection();
  await db.collection('registers').insertOne({
    id, name, age, github, cep, state, city, district, street, num, comp,
  });
  return {
    register: {
      id, name, age, github, cep, state, city, district, street, num, comp,
    },
  };
};

const allRegister = async () => {
  const db = await connection();
  const register = await db.collection('registers').find().toArray();
  return register;
};

const findRegister = async (id) => {
  const db = await connection();
  const find = await db.collection('registers').findOne({ id });
  return find;
};

const updateRegister = async (data) => {
  const {
    id, name, age, github, cep, state, city, district, street, num, comp,
  } = data;
  const db = await connection();
  await db.collection('registers').updateOne({ id }, {
    $set: {
      register: {
        name, age, github, cep, state, city, district, street, num, comp,
      },
    },
  });
  return {
    register: id, name, age, github, cep, state, city, district, street, num, comp,
  };
};

const excludeRegister = async (id) => {
  const db = await connection();
  await db.collection('recipes').deleteOne({ id });
};

module.exports = {
  registerCreate,
  allRegister,
  findRegister,
  updateRegister,
  excludeRegister,
};
