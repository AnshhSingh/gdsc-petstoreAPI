const mongoose = require("mongoose");

const petSchema = mongoose.Schema({
  name: String,
  owner: String,
  age: String,
  gender: String,
  type:String
});

module.exports = mongoose.model("Pet", petSchema);
