const User=require('../models/User')
const express=require('express')
// const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
// var jwt=require('jsonwebtoken')
const router=express.Router();
const { body, validationResult } = require('express-validator');
const validateInputs = require('../middleware/validateinput');

router.post(
    '/register',
    validateInputs,
    [
        body('username').isLength({min:4}).withMessage('Username must be at least 4 characters'),
        body('email').isEmail(),
        body('password').isLength({min:4}).withMessage('Username must be at least 4 characters'),
    ],
    async(req,res)=>{
       
        const errors=validationResult(req);
        if(!errors.isEmpty()){
                 res.status(400).json({ errors: errors.array() });
              
        }
        try{
            let user=await User.findOne({email:req.body.email});
            if(user){
                return res.status(400).json('User with this email already exists');
            }
            const salt=await bcrypt.genSalt(10);
            const secretpassword=await bcrypt.hash(req.body.password,salt);

            user =await User.create({
                username:req.body.username,
                password:secretpassword,
                email:req.body.email
            });
            
             res.status(200).json({user,password:undefined})
        }
        catch(error){
            console.log(error.message)
             res.json({error})
        }

});

module.exports = router;

