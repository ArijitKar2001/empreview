// import mongoose
const mongoose = require("mongoose");

// mongoDB url stored in env variable
const MONGODB_URL =
  "mongodb+srv://user1:Password1@cluster0.fios3wg.mongodb.net/emp?retryWrites=true&w=majority&appName=Cluster0";

// connect to database
exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      // if database connected
      console.log("Database is connected successfullly")
    )
    .catch((error) => {
      // if there is some error
      console.log("database connection is failed");
      console.log(error);
      process.exit(1);
    });
};
