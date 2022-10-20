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

UserScheme.pre("save", async(next) => {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});


// UserScheme.pre('save', function(next) {
//   let user = this;
//   if (!this.isModified("password")) return next();
//   try {
//     const salt =  bcrypt.genSalt(10);
//     user.password =  bcrypt.hash(user.password, salt);
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// });

// // only hash the password if it has been modified (or is new)
// if (!user.isModified('password')) return next();

// // generate a salt
// bcrypt.genSalt(10, function(err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, function(err, hash) {
//         if (err) return next(err);
//         // override the cleartext password with the hashed one
//         user.password = hash;
//         next();
//     });
// });

module.exports = mongoose.model("users", UserScheme);
