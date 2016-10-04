angular.module('app',[])
    .controller('MainCtrl', mainController);

function mainController($scope){
    $scope.userList=[{
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
    }];
    $scope.newUser={
        name: '',
        title:'',
        email:'',
        phone:'',
        address:{
            street:'',
            city:'',
            state:'',
            zip:''
        }
    };
    $scope.selectedUser= $scope.userList[0]
    $scope.addUser = function(){
        $scope.userList.push($scope.newUser)
        $scope.newUser = {};
    }


}