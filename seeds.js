var mongoose = require('./config/database');

var User = require('./models/user');
var Task = require('./models/task');

var users = [
  { // 0
    handle: "DunkLord",
    name:   "Bob Neverdunk"
  },
  { // 1
    handle: "MoneyMarge",
    name:   "Margaret Kalanchoe"
  }
];

var tasks = [
  {
    name: "Change the Oil",
    category: "The car",
    time: "About an hour",
    url: "http://matters.madisoncollege.edu/sites/default/files/styles/galleryformatter_slide/public/field/image/921_oil_change.jpg?itok=I3wux8Fm",
    completed: false
  },

  {
    name: "Build spare room",
    category: "House",
    time: "Could be a while...",
    url: "https://mozo.com.au/blog/wp-content/uploads/2009/06/House-Fix.jpg",
    completed: true
  }

];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
    }
  });
});

Task.remove({}, function(err) {
  if (err) console.log(err);
  Task.create(tasks, function(err, tasks) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + tasks.length  + " task.");
      mongoose.disconnect();
    }
  });
});
