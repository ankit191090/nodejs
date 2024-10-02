const userServices = require("../services/userService");
const bcrypt = require("bcrypt");

const userCreate = async (obj) => {
  const { firstName, lastName, phoneNumber, emailAddress, profilePassword } = obj;

  let userObj = {
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    profilePassword: bcrypt.hashSync(profilePassword, 10),
  };

  const user = await userServices.createUser(userObj);
  if (!user) {
    return { error: true, message: "Somthing went wrong" };
  }
  return user;
};

module.exports = {
    userCreate,
}