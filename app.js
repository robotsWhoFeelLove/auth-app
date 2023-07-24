const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
const userRouter = require("./routes/user-routes");
const port = (process.env.PORT || '3000');

const saltRounds = 10;
const cors = require("cors");

require('dotenv').config()
const Schema = mongoose.Schema;

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true      
}));

app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser : true})

app.use("/", userRouter);

app.listen(port, function(){
    console.log("Server started on port 3000.");
});