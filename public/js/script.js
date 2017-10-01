var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

   $scope.contactList={};
   $scope.user ={};

    $http.get("http://localhost:3000/api/contacts")
        .then(function(response) {
            $scope.contactList = response.data;
            console.log( $scope.contactList);
        });

  $scope.addUser=function(user){

    var dataObj = {
    				"first_name" : user.fname,
    				"last_name" : user.lname,
    				"phone" : user.phone
    		};
        $http({
            method: 'POST',
            url: 'http://localhost:3000/api/contacts',
            data:dataObj
}).then(function successCallback(response) {
    console.log(response.data);
    $http.get("http://localhost:3000/api/contacts")
        .then(function(response) {
            $scope.contactList = response.data;
            console.log($scope.contactList);
        });
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

}

$scope.deleteUser=function(user){

  $http({
      method: 'DELETE',
      url: 'http://localhost:3000/api/contacts/'+user._id,

  }).then(function successCallback(response) {
  console.log(response.data);
  $http.get("http://localhost:3000/api/contacts")
  .then(function(response) {
      $scope.contactList = response.data;
      console.log($scope.contactList);
  });
  }, function errorCallback(response) {
  // called asynchronously if an error occurs
  // or server returns response with an error status.
  });


}








});
