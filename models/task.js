// Require mongoose to create a model.
var mongoose = require('mongoose');

// Create a schema of your model
var taskSchema = new mongoose.Schema({
  name:     String,
  category:   String,
  time:  String,
  url:   String,
  completed: Boolean
});

// Create the model using your schema.
var Task = mongoose.model('Task', taskSchema);

// Export the model of the Fish.
module.exports = Task;
