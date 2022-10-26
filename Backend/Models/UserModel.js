const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const express = require("express")

/// model /User.js 
const UserScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type:[mongoose.Schema.Types.ObjectId],
    ref:'roles',
    require: true
  },
  isVerified : {
    type : Boolean,
    default : false
  },
  emailToken : {
    type : String
  }
},
{
  timestamps: true
});


  


module.exports = mongoose.model("users", UserScheme);
