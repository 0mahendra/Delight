const asyncHandler = require("express-async-handler");
const Exp = require("../Models/ExpModel");



const registerPost = asyncHandler(async (req, res) => {
    const {id ,title, video } = req.body;
    if(!id || !video){
        res.status(400);
        throw new Error("invalid entries");
        return;
    }

    const newPost = await User.create({
        id ,
        title,
        video,
    });

    if(newPost){
        res.status(201).json({
            _id: newPost._id,
            title: newPost.title,
             id : newPost.id,
            video: newPost.video,
          });
    }
    else {
        res.status(400);
        throw new Error("unable to create a post");
      }
});


const allPost = asyncHandler(async (req, res) => {
  

 

  const allvideo = await Exp.findOne({});

  if (!allvideo) {
    res.status(400);
    throw new Error("Unable fetch all data");
  }

 
   res.json(allvideo);
});



module.exports = { allPost, registerPost };
 