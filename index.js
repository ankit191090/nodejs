const express = require("express");
const app = express();
const secrets = require("./utils/secrets")
const cors = require("cors");
const bodyParser = require("body-parser");
const Dbconnection = require("./config/dbconnection");
const userRoutes = require("./routes/userAuth") 
Dbconnection.connecttoDB();

app.use(bodyParser.json({ limit: "50 mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/users", userRoutes);

app.listen(secrets.PORT, ()=>{
    console.log("APP is running on", secrets.PORT);
})
