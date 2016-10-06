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
            $scope.userList.push($scope.selectedUser);
        }
        $scope.newUser = {};
        $scope.editMode = false;
        };

    $scope.setSelectedUser = function(user){
        $scope.selectedUser = user;
    }
    function cleanInput(input) {
        return input
            .replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
            .replace(/\s{2,}/g," ");

    $scope.q = cleanInput(selectedUser.address.street);
    $scope.change_q = q.split(" ");

}

}



