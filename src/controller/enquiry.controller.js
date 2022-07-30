const httpStatus = require("http-status");
const enquireServices = require("./../service/enquiry.service");

//controller to send enquiry
async function sendEnquiry(req, res) {
    //Call appropriate service for sending the enquiry
    const obj = {
        full_name: req.body.full_name,
        email: req.body.email,
        message: req.body.message
    }
    const response = await enquireServices.sendEnquiry(obj);

    //After successfull request creating entry
    if (response.success === true && response.enquiry_data) {

        //sending response back to client on success.
        res.status(httpStatus.CREATED).send({
            success: response.success,
            enquiry_data: response.enquiry_data
        })
    } else {
          //sending response back to client on failure.
          res.status(httpStatus.BAD_REQUEST).send({
            success: response.success,
            message:"Something went wrong!"
        })
    }
}

module.exports = {
    sendEnquiry,
}