const express = require('express');
const Num = require('../models/NumModel');
const {findFibonacci} = require('../utils');

const numberRouter = express.Router();

numberRouter.post(
  '/', async (req, res) => {
    const requestedNumber = req.body.num;
    const result = findFibonacci(requestedNumber);
    try { 
      const n = new Num({
        num: requestedNumber
      });
      const createdNumber = await n.save();
      res.send({
        num: createdNumber.num,
        result
      });
    } catch(error){
      console.log(error);
      res.status(404).send({ message: `${error}` })
    }
  }
);

module.exports = numberRouter;
