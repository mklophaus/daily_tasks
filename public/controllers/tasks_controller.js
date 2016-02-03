// IIFE
(function(){
  ' ';

  angular
    .module("tasksApp")
    .controller("TasksController", TasksController);

    TasksController.$inject = []; // makes it minification safe

    function TasksController(){

      var vm = this;

      vm.tasksList = [
      {
        taskName: 'Laundry',
        taskCategory: 'Home Stuff',
        taskTime: 'Easy',
        image: 'images/laundry.jpg',
        completed: true
      },
      {
        taskName: 'Finish the SOP reports',
        taskCategory: 'Work',
        taskTime: 'Could be long...',
        image: 'images/roughWork.jpg',
        completed: false
      }

    ];

    this.deleteTask = deleteTask;

    function deleteTask(k){
      // Find the true offset in the Kitties array
      var idx = this.tasksList.indexOf(k);
      // Remove that exact Kitty
      this.tasksList.splice(idx, 1);
      console.log(this.tasksList);
    }

  }; // end of controller

})(); //Immediatley call our IFFE function
