var Task = require("../models/task");

var taskShow = function(req, res, next){
  var id = req.params.id;

  Task.findById(id, function(err, task){
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

var taskIndex = function(req, res) {
  Task.find({}, function(err, tasks) {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
}

var taskCreate = function(req, res) {
  var task       = new Task();   // create a new instance of the Fish model

  task.name      = req.body.name;
  task.category  = req.body.category;
  task.time      = req.body.time;
  task.url       = req.body.url;
  task.completed = req.body.completed;

  task.save(function(err, savedTask) {
    if (err) {
      res.send(err)
    }

    res.json(savedTask);
  });
}

module.exports = {
  taskShow:   taskShow,
  taskIndex:  taskIndex,
  taskCreate: taskCreate
}
