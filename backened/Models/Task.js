const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    user: { type: String },
    task: { type: String},
   
  },
  { timestamps: true }
);

const Taskdata = mongoose.model("Taskdata", taskSchema);
module.exports = Taskdata;