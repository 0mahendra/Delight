
const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");
// import { Server } from "socket.io";

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const taskRoutes = require("./routes/taskRoutes")
const dataRoutes = require("./routes/dataRoutes")
const expRoutes = require("./routes/expRoutes");
const { notFound, errorHandler } = require("./middleware/errMiddleware");
const path = require("path");
const connectDB = require("./config/db");
dotenv.config();


connectDB();
const PORT = process.env.PORT || 5000;


const  app = express();

app.use(express.json());



app.get("/",(req,res)=>{
    res.send("API is running");
});
app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/task",taskRoutes);
app.use("/api/datavalue",dataRoutes);
app.use("/api/exp/",expRoutes);


const server = app.listen(5000,console.log(`the server is running at ${PORT}...`));

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});




io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
       
    socket.join(userData._id);
    console.log(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat",(room)=>{
    socket.join(room);
    console.log("user joined room :" +room );
  });
   
  socket.on("new message",(newMessageReceived)=>{
    var chat= newMessageReceived.chat;

    if(!chat.users)return console.log("chat user is undefined");

    chat.users.forEach((user)=>{
      if(user._id == newMessageReceived.sender._id)return;

      socket.in(user._id).emit("message recieved",newMessageReceived);

    });
  });
    
  });

// frontend me socket-io-client versio installl karna  h 
