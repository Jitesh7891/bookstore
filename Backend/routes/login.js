const User=require('../models/User')
const express=require('express')
// const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
const router=express.Router();
const { body, validationResult } = require('express-validator');
const validateInputs = require('../middleware/validateinput');
const dotenv = require('dotenv');
const fetchuser = require('../middleware/fetchuser');
dotenv.config();

const token=process.env.JWT_SECRET;

router.post(
    '/login',
    validateInputs,
    [
        body('username').isLength({min:4}).withMessage('Username must be at least 4 characters'),
        body('password').isLength({min:4}).withMessage('Username must be at least 4 characters'),
    ],
    async(req,res)=>{
        
        let success=false;
        // console.log('hey ',token)

        const errors=validationResult(req);
        if(!errors.isEmpty()){
                return res.status(400).json({success, errors: errors.array() });
              
        }
        try{
        const{username}=req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({success,message:"User not found"})
        }
        const passwordcompare=await bcrypt.compare(req.body.password,user.password);

        if(!passwordcompare){
            return res.status(400).json({success,message:"Invalid password"})
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        success=true;
        const data={
            user:{
               username:user.username,
               email:user.email 
            }
        }
        const authtoken=jwt.sign(data,token)
        res.json({success,authtoken})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success,error:error.message})
    }
    });

    router.post('/getuser',
        fetchuser
    )

module.exports=router