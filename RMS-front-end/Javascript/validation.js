function formvalidate(){
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(username.value.trim()==""){
       alert("Blank Username!! please fill name");
        username.style.border="solid 3px red";
        return false;
    }
    else if(password.value.trim()==""){
        alert("Blank Password is not allowed");
        password.style.border="solid 3px red";
        return false;
    }
    else if(password.value.trim().length<=5){
        alert("Password must be atleast 6 characters long!");
        return false;
    }
    else return true;
}

////////////////////////////////////////////////////////////////////////////
/*function writename(){
    var welcomemsg = document.getElementById('welcome');
    var uname = document.getElementById('uname');
    var formcontent = document.getElementById('entername');

    welcomemsg.innerHTML ="Wlcome "+uname.value+ ".</br>";
    formcontent.innerHTML = "";
}
*/


