const mongoose = require("mongoose");   
//making a user schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailID: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});
// making a usermodal based on the user schema 
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
