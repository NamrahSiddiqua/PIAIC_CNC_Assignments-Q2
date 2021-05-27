//Method: 1
var userName = "Namrah"
function modifyUserName() {
    userName = "Siddiqua";
}
function showUserName() {
  console.log(userName);
}
console.log(userName);
showUserName(userName);
modifyUserName();
showUserName();


//Method: 2
function createUserName() {
    userName = "Namrah";
}
function modifyUserName() {
    if (userName)
     userName = "Siddiqua";
}
function showUserName() {
  console.log(userName);
}

createUserName();
showUserName();

modifyUserName();
showUserName();

//Method: 3

function createUserName() {
     var userName = "Namrah"
}
function showUserName() {
  console.log(userName);
}

createUserName();
showUserName();

