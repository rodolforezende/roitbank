require('dotenv').config();
const { MongoClient } = require('mongodb');

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/roitbank`;
const DB_NAME = 'roitbank';

module.exports = () => MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((conn) => conn.db(DB_NAME))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
