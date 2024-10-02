const { response } = require("express");
const userManager = require("../manager/userManager");
const ResponseUtil = require("../utils/response")

const userSignup = async (request, response)=>{
    console.log("user SignUp");
    console.log("Request Data", request.body);
    try {
        let result = await userManager.userCreate(request.body);
        if (result.error) {
          response.send(ResponseUtil.generateErrorObject(500, result));
        } else {
          response.send(
            ResponseUtil.success(
              result,
              "User successfully signed up."
            )
          );
        }
      } catch (error) {
        console.log(error);
        response.send(ResponseUtil.error(500, error));
      }
}

const userSignin = async ()=>{
    console.log("user SignIn");
}

const forgotPassword = async ()=>{
    console.log("forgotPassword");
}

const resetPassword = async ()=>{
    console.log("Reset Password");
}

module.exports={
    userSignin,
    userSignup,
    forgotPassword,
    resetPassword,
}