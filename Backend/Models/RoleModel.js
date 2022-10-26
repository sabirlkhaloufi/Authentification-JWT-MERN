const mongoose = require("mongoose");

/// model/User.js 
const RoleScheme = mongoose.Schema({
  role: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("roles", RoleScheme);
