const Enquiry = require("./../model/enquiry.model");

async function sendEnquiry(data) {
    try {
        //Creating object to add an mongoDB entry
        const obj = {
            "full_name": data.full_name,
            "email": data.email,
            "message": data.message
        }

        //Creating mongoDB entries
        const response = await Enquiry.create(obj)
        return {
            success: true,
            message: "We received your enquiry.",
            enquiry_data: response
        }
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Some error occured",
        }
    }
}

module.exports={
    sendEnquiry
}