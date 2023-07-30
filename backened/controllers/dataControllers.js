const asyncHandler = require("express-async-handler");
const DataVal = require("../Models/DataModel");

const sendData = asyncHandler(async (req, res) => {
     console.log("Send data is called")
    const { username, email, data } = req.body;
  
    if (!username || !email || !data) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }
    
    const user = await DataVal.create({
      username,
      email,
      data,
    });   

    // var datas = await DataVal.insertMany(user);      
    // console.log(user);
    console.log("data is succesfully get")
   res.send(user);
    // if (user) {
    //   res.status(201).json({
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     data:user.data,
    //   });
    //   console.log("created");
    // } else {
    //   res.status(400);
    //   throw new Error("User not found");
    // }
  });

  module.exports = { sendData };