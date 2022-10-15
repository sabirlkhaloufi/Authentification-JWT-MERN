const mongoose = require("mongoose");

/// model/User.js 
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
    type:mongoose.Schema.Types.ObjectId,
    ref:'roles',
    require: true
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("users", UserScheme);
