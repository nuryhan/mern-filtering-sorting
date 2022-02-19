const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " Please provide a name to Bootcamp"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, " Please provide a rating to Bootcamp"],
  },
  description: {
    type: String,
    required: [true, " Please provide a description to Bootcamp"],
  },
  price: {
    type: Number,
    required: [true, " Please provide a price to Bootcamp"],
  },
});

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);

module.exports = Bootcamp;
