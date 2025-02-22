const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Worker_schema = new schema({
  id: {
    type: String,
    required: true,
    unique: true, // Ensure ID is unique
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String, // Store the file path as a string
  }
}, { timestamps: true });

module.exports = mongoose.model("WorkerList", Worker_schema);