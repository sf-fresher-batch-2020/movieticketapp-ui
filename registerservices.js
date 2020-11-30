class RegisterService{
    register = function(userObj){
       var usersTemp = JSON.parse(localStorage.getItem("USERS"));
       var users= usersTemp ? usersTemp:[];
       if(!users.some(user=>user.email===userObj.email)){
       users.push(userObj);
       localStorage.setItem("USERS",JSON.stringify(users));
       location.reload();
       console.log(userObj);
       alert("continue login ");
       let result="success";
       return result;
    }
    else{
        alert("user already exists ");
    }
        }
}