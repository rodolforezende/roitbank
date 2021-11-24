const { ObjectId } = require('mongodb');
const connection = require('./connection');

const registerCreate = async (data) => {
  const db = await connection();
  await db.collection('registers').insertOne(data);
  return { data };
};

const allRegister = async () => {
  const db = await connection();
  const register = await db.collection('registers').find().toArray();
  return register;
};

const updateRegister = async (dataId, data) => {
  const db = await connection();
  const result = await db.collection('registers').updateOne({ _id: ObjectId(dataId) }, {
    $set: { ...data },
  });
  return result;
};

const excludeRegister = async (id) => {
  const db = await connection();
  const find = await db.collection('registers').findOne({ _id: ObjectId(id) });
  await db.collection('registers').deleteOne({ _id: ObjectId(id) });
  return find;
};

module.exports = {
  registerCreate,
  allRegister,
  updateRegister,
  excludeRegister,
};
