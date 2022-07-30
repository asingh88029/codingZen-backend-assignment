const express = require("express"); //importing express
const app = express(); //creating instance
const router = require("./routes");
const httpStatus = require("http-status");
const cors = require("cors");

//for cross-platform requests
app.use(cors())

//we are using express.json() for extracting body as a JSON.
app.use(express.json());

//routing
app.use("/",router)

// send back a 404 error for any unknown api request
app.use("*",(req, res) => {
    res.status(httpStatus.NOT_FOUND).send({
        success:false,
        message:"API path not defined"
    })
});

module.exports = app;