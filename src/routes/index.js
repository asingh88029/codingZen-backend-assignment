const express = require("express");
const router = express.Router();
const enquiryRoute = require("./enquiry.route");

//redirecting to /enquiry 
router.use('/enquiry',enquiryRoute);

module.exports=router;