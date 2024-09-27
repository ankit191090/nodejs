const secrets = require("../utils/secrets")
const mongoose = require("mongoose")

const connecttoDB = async () => {
    if(secrets.HOST == "localhost"){
        return mongoose
        .connect(secrets.DBURL)
        .then(()=>
        {
            console.log("MongoDB Connected Successfully");
        })
        .catch((error) => {
            console.log("Connection Error ... ",error);
        })
    }
    else{
        const DB_URL = `mongodb://${secrets.DBUSER}:${secrets.DBPASSWORD}@localhost:27017/${process.env.DBNAME}`;
        return mongoose
          .connect(DB_URL)
          .then(() => {
            console.log("MongoDb Connected");
          })
          .catch((error) => {
            console.log("Connectoin Error--->", error);
          });
    }
}


module.exports = {
    connecttoDB,
}