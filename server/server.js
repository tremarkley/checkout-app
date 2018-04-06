const express = require('express');
const path = require('path');
const mongo = require('../db/db');

const port = 3434;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

mongo.connectMongo()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on ${port}`);
    });
  })
  .catch((error) => {
    console.error(`unable to connect to mongo ${error}`);
  });

