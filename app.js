angular.module('app',[])
    .controller('MainCtrl', mainController);

function mainController($scope){
    $scope.userList=[
        {
            name: 'first name',
            title: 'CEO',
            email:'www',
            phone:'112',
            address:{
                street:'348 E Main',
                city:'Lexington',
                state:'KY',
                zip:'40508'
            }
        },
        {
            name: 'second name',
            title: 'CTO',
            email:'@gmail',
            phone:'333',
            address:{
                street:'1000 E Main',
                city:'Lexington',
                state:'KY',
                zip:'40507'
            }
        }
        ];
    $scope.newUser={};
    $scope.selectedUser= $scope.userList[0];
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
}



