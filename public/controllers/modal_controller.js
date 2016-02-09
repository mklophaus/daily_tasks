angular
.module('tasksApp')
.controller('ModalController', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

  var modalInstance = $uibModal.open({
    animation: $scope.animationsEnabled,
    templateUrl: 'myModalContent.html',
    controller: 'ModalInstanceController',
    size: size,
    resolve: {
      items: function () {
        return $scope.items;
      }
    }
  });

  modalInstance.result.then(function (selectedItem) {
    $scope.selected = selectedItem;
  }, function () {
    $log.info('Modal dismissed at: ' + new Date());
  });
  };

});


//angular.module('app').controller('ModalInstanceController', function ($scope, $uibModalInstance, items) {
  angular
    .module('tasksApp')
    .controller('ModalInstanceController',ModalInstanceController);

  ModalInstanceController.$inject = ['$scope','$log','$http','$uibModalInstance', '$window'];

  function ModalInstanceController($scope,$log,$http, $uibModalInstance, $window)
  {

    var list = [];

    $scope.submit = function() {
      if ($scope.task.name) {
        list.push($scope.task);

        console.log($scope.task.name);
        $http.post('/tasks', {
          name: $scope.task.name,
          category: $scope.task.category,
          time: $scope.task.time,
          url: $scope.task.url,
          completed: false
        })
          .then(function(){
            $scope.task = "";
            list = [];
          })

      $window.location.reload();

      }

    };

    $scope.ok = function () {
      $uibModalInstance.close($scope.task);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
};
