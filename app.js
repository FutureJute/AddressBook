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
    $scope.selectedUser= $scope.userList[0];
    $scope.setSelectedUser= function(user){
        $scope.selectedUser = user;
    }

    $scope.editMode = false;
    $scope.addMode =false;

    $scope.doAction = function(action){
        if(action === 0){
            $scope.addMode =true;
        }
        else{
            $scope.editMode =true;
        }

    }
    
    
    $scope.addUser = function(a){
        if(a===0){
            $scope.userList.push($scope.newUser)
        }
        else{
            $scop.userList = $scope.newUser
        }
        $scope.newUser = {};
        $scope.addMode=false;
    }


}