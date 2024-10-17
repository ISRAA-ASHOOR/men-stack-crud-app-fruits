// models/fruit.js
// define our model
const mongoose = require('mongoose');
// Create the fruits schema
const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});
// Register the model
const Fruit = mongoose.model("Fruit", fruitSchema); // create model
// Export the model from the fruit.js file
module.exports = Fruit;