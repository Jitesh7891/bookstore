const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now(),
    }
});

// Apply a transformation to format the createdAt date
UserSchema.set('toJSON', {
    transform: function (doc, ret) {
      ret.createdAt = new Date(ret.created).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Use 12-hour format
      });
      return ret;
    },
  });

module.exports=mongoose.model('User',UserSchema)