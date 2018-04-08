const express = require('express');
const { createNewRecord } = require('../../db/controller');

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    await createNewRecord(req.body.information);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

module.exports = router;
