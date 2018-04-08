const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

let db;

const connectMongo = () => (
  new Promise(async (resolve, reject) => {
    try {
      const connection = await MongoClient.connect(url);
      db = connection.db('cart-app');
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
