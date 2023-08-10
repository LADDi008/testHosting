const {createUser, allUser} = require('./controller/user')
const express = require ("express");
const cors = require("cors");
const mongoose = require('mongoose');
const port = process.env.PORT || 8001;
const app = express()
require("dotenv").config();
app.use(express.json());




const corsOptions = {
    origin: "http://localhost:3002", // Replace with the domain you want to allow
    // credentials: true, // Enable sending cookies in cross-origin requests
};
app.use(cors(corsOptions));








main().catch(err => console.log(err));
// "mongodb+srv://gurjit758232:gurjit758232@cluster0.yeglfyt.mongodb.net/?retryWrites=true&w=majority" ||
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
console.log("Databse Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




app.post('/createUser',createUser);
app.get('/allUser',allUser);

if ( process.env.NODE_ENV == "production"){

  app.use(express.static("my-app/build"));

}






app.listen(port,()=>{console.log(`Server started at ${port}`);})