const express = require('express');
const path = require('path');

const port = 3434;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

