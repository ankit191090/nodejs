const dotenv = require("dotenv");
dotenv.config({ path :'.env'});

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DBNAME = process.env.DBNAME;
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const DBURL = process.env.DBURL;


module.exports = {
    HOST,
    PORT,
    DBNAME,
    DBUSER,
    DBPASSWORD,
    DBURL,
}




