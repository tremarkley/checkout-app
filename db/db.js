const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

let db;

const connectMongo = () => (
  new Promise(async (resolve, reject) => {
    try {
      db = await MongoClient.connect(url);
      resolve();
    } catch (error) {
      reject(error);
    }
  })
);

const getDb = () => db;

module.exports = {
  connectMongo,
  getDb,
};
