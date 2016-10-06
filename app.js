angular.module('app',[])
    .controller('MainCtrl', mainController);

function mainController($scope,$http){
    $scope.getFile= function(){
        $http.get('address.json').success(function(data){
        $scope.userList=data;
        $scope.selectedUser= $scope.userList[0];
    });}
    $scope.getFile();
    $scope.newUser={};
    $scope.editMode = false;
    $scope.editUser = function(user) {
        $scope.selectedUser = user;
        $scope.editMode = true;
    };
    $scope.addUser = function(user) {
        $scope.selectedUser = $scope.newUser;
        $scope.editMode = true;
    };
    $scope.userForm = function(){
        if ($scope.selectedUser != $scope.newUser) {
            console.log('User already in user list');
        } else {
            if ($scope.selectedUser.name != null){
                $scope.userList.push($scope.selectedUser);
            }
            else{ 
                console.log ('Enter details.');
                $scope.selectedUser= $scope.userList[0];
            }
        }
        $scope.newUser = {};
        $scope.editMode = false;
        };

    $scope.setSelectedUser = function(user){
        $scope.selectedUser = user;
    }
 
}





