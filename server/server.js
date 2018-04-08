const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const mongo = require('../db/db');
const router = require('./router/router');

const port = 3434;
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/checkout', router);

mongo.connectMongo()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on ${port}`);
    });
  })
  .catch((error) => {
    console.error(`unable to connect to mongo ${error}`);
  });

