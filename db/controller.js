const { getDb } = require('./db');

const createNewRecord = async ({
  name,
  email,
  password,
  addressLine1,
  addressLine2,
  city,
  state,
  zipCode,
  phoneNumber,
  creditCardNumber,
  expiryDate,
  CVV,
  billingZipCode,
}) => {
  const db = getDb();
  const collection = db.collection('purchases');
  await collection.insertOne({
    name,
    email,
    password,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    phoneNumber,
    creditCardNumber,
    expiryDate,
    CVV,
    billingZipCode,
  });
};

module.exports = {
  createNewRecord,
};
