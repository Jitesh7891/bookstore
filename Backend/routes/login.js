const User=require('../models/User')
const express=require('express')
// const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
// var jwt=require('jsonwebtoken')
const router=express.Router();
const { body, validationResult } = require('express-validator');
const validateInputs = require('../middleware/validateinput');


router.post(
    '/login',
    validateInputs,
    [
        body('username').isLength({min:4}).withMessage('Username must be at least 4 characters'),
        body('password').isLength({min:4}).withMessage('Username must be at least 4 characters'),
    ],
    async(req,res)=>{
       
        const errors=validationResult(req);
        if(!errors.isEmpty()){
                return res.status(400).json({ errors: errors.array() });
              
        }
        try{
            const{username}=req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).send("User not found")
        }
        const passwordcompare=await bcrypt.compare(req.body.password,user.password);

        if(!passwordcompare){
            return res.status(400).send("Invalid password")
        }

        res.send("Login succesful")
    }catch(error){
        console.log(error.message)
        return res.status(500).json({error:error.message})
    }
    });

module.exports=router