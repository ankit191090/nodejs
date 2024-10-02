const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    countryCode: { type: String },
    phoneNumber: { type: Number },
    emailAddress: { type: String },
    userStatus: { type: String },
    profilePassword : {type: String},
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("users", userSchema);
module.exports = user;
