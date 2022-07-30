const mongoose = require("mongoose");
const app = require("./app");
const mongodb_url = "mongodb+srv://asingh88029:rXdjn1lD2YvQiDbb@creamnlayers-project.zd1kl.mongodb.net/codingZen?retryWrites=true&w=majority";
const port = 8081;

//connecting to remote mongoDB
(async () => {
    await mongoose
        .connect(mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDB Connected Sucessfully...");
        })
        .catch((err) => {
            console.log(err);
        });
})();//It's self calling function in Js. 

//starting the server
app.listen(port, (err) => {
    if (err) {
        console.error("Server not running", err);
    } else {
        console.log(`Server running at PORT: ${port}`);
    }
});