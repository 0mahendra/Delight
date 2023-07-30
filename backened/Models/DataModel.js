const mongoose = require("mongoose");

const DataSchema  = mongoose.Schema (
    {
    username:{type:"String"},
    email:{type:"String"},
    data:{type:"String"},

},
);

const DataVal = mongoose.model("DataVal",DataSchema);

module.exports = DataVal;
