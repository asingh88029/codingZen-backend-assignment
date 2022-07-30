const express = require("express");
const router = express.Router();
const enquiryControllers = require("./../controller/enquiry.controller");

router.post("/",enquiryControllers.sendEnquiry);

module.exports = router;