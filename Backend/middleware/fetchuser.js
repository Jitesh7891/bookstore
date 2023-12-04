const User=require('../models/User')
const express=require('express')
const jwt=require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();

const secret=process.env.JWT_SECRET;

const fetchuser=async(req,res,next)=>{
    const token = req.header('authtoken');

    if(!token){ 
        return res.status(401).json({message:"Validate using a valid token"})
    }

    try{
        const decoded= jwt.verify(token,secret);
        const username=decoded.user.username;
        const email=decoded.user.email;

        return res.json({username,email})
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

module.exports=fetchuser;