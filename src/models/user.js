const mongoose = require("mongoose");   
//making a user schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required:true,
    trim:true
  },
  lastName: {
    type: String,
    trim:true
  },
  emailID: {
    type: String,
    unique:true,                            //data sanitization and validation
    trim:true
  },
  age: {
    type: Number,
    min:18
  },
  gender: {
    type: String,
    validate(value){                         //custom validation 
        if(!["male","female","others"].includes(value)){
            throw new Error("please enter your gender")
        }
    }
  },
});
// making a usermodal based on the user schema 
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
