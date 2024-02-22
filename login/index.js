////////////////// Obtenez le modal d'inscription ///////////////////////
function userInfo (){
  var loginName = localStorage.getItem("userName");
  var loginPw = localStorage.getItem("userPw");

  var userNameLog = document.getElementById("username-login").value;
  var userPwLog = document.getElementById("psw-login").value;



  if (loginPw == userPwLog && loginName == userNameLog) {
    window.location='../Accueil/accueil.html';
  } else {
    alert("Nom ou mot de passe invalide.");
  }
}

function userRegist (){
  var userNameReg = document.getElementById("username").value;
  var userPwReg = document.getElementById("psw").value;

  localStorage.setItem("userName", userNameReg);
  localStorage.setItem("userPw", userPwReg);
}

/* function closeModal () {
  let modalContainer = document.getElementsByClassName("container");
  let modal = document.getElementById("id01");
  if (onclick = modalContainer) {
    modal.setAttribute("style", "display = none;");
  }
} */



// ////////////////// Obtenez le modal d'inscription ///////////////////////
// var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// ///////////////// Obtenez le modal de connexion //////////////////////////
// var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal.style.display = "none";
//     }
// }

