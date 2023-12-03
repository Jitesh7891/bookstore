const User=require('../models/User')
const express=require('express')

//i have designed this middleware so that if empty username and password are sent application doesnt crash
//although we will also perfrom client side validation
const validateInputs = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }
    next();
  };

  module.exports=validateInputs;