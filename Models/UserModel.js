const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

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
    type:mongoose.Schema.Types.ObjectId,
    ref:'roles',
    require: true
  },
  isVerified : {
    type : Boolean
  },
  emailToken : {
    type : String
  }
},
{
  timestamps: true
});

// UserScheme.pre("save", async(next) => {
//   // if (!this.isModified("password")) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// });

module.exports = mongoose.model("users", UserScheme);
