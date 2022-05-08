const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  select_room: {
    type: String,
    required: [true, "Please select room"],
  },
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  meeting_description: {
    type: String,
    required: [true, "Please enter  meeting description"],
  },
  date: {
    type: String,
    required: [true, "Please select date"],
  }, 
  time: {
    type: String,
    required: [true, "Please select time"],
  },
});

const userSchema = mongoose.model("User", UserSchema);
module.exports = userSchema;
