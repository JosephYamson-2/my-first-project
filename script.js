const NameID = document.getElementById("id");
const UserName = document.getElementById("username");
const Password = document.getElementById("password");

const form = document.getElementById("form");

addEventListener("click", function() {
    console.log("NameID: " + NameID.value);
    console.log("UserName: " + UserName.value);
    console.log("Password: " + Password.value);
});
