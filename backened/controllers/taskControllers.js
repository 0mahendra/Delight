const asyncHandler = require("express-async-handler");
const Message = require("../Models/messageModel");
const User = require("../Models/userModel");
const Chat = require("../Models/ChatModel");
const Taskdata = require("../Models/Task");

const getTask = asyncHandler(async (req, res) => {
  const { userName } = req.body;
  console.log(userName);
    try {
      const [messages] = await Taskdata.findOne({user:userName });
        console.log(messages)
      res.json(messages);
      
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  });

  const sendTask = asyncHandler(async (req, res) => {
    const { userName,task } = req.body;

    var newTask = {
        user: userName,
        task:task,
      };
    const userExists =  Taskdata.findOne({ userName });

    // console.log(userExists.user);
    // if(userExists){
    //     var id = userExists._id;
    //     var taskd = Taskdata.findByIdAndUpdate({_id:id},{$pull:{task:task}});
    //     console.log(newTask.task);
    //     console.log("data is succesfully Updated")
    // }
    // else{
    var taskd = await Taskdata.insertMany(newTask);      
    console.log(newTask);
    console.log("data is succesfully get")
    // }
      
  });

  module.exports = { getTask, sendTask };