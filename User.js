class User{
    constructor(){
        name = username.value();
        password2 = password.value();
    }

getUserInfo(){
   var playerName =  database.ref("users/user/name");
   playerName.on("value",(data)=>{
    playerName = data.val();
})
var playerPass = database.ref("users/user/password");
    playerPass.on("value",(data)=>{
        playerPass = data.val();
    })
}

updateUserInfo(){
    database.ref("/").update({
        name : name,
        password : password2,
    });
}
}