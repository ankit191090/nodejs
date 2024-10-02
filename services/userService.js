const userModel = require("../models/userModel");

const createUser = (input)=>{
    return new Promise(async (resolve, reject) => {
    try{
        let userCreate = await userModel.create(input);
        resolve(userCreate);
    }catch(error){
        console.log("error createUser", error)
        reject(error);
    }
});
};

module.exports= {
    createUser,
}