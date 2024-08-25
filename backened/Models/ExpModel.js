const mongoose = require("mongoose");

const ExpSchema = mongoose.Schema(
    {
        id : {type : "String" , required: true},
        title :{type :"String" , required:true},
        video : {type : "String" , required : true},
        
    },
    { timestaps: true }

);

const Exp  = mongoose.model("Exp" , ExpSchema);

module.exports = Exp;