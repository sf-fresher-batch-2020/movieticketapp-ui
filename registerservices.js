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
      /*  let result="success";
       return result; */
    }
    else{
        alert("user already exists ");
    }
        }
}

/* 

function register(){
    event.preventDefault();
    var userData={
        email: document.getElementById("email").value,
     name:document.getElementById("username").value,
     password: document.getElementById("password").value
    };
    var usersr=JSON.parse(localStorage.getItem("USERS")) || [];
    if(!usersr.some(user=>user.email===userData.email)){
        usersr.push(userData);
        localStorage.setItem("USERS",JSON.stringify(usersr));
           location.reload();
          console.log(userData);
          alert("continue login ");
    }
    else{
        alert("user already exists try registering with different credentials");
    }
} */