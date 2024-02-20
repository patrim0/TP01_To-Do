////////////////// Obtenez le modal d'inscription ///////////////////////
function userInfo (){
  const userNameLog = document.getElementById("username-login").value;
  const userPwLog = document.getElementById("psw-login").value;

  const loginName = localStorage.getItem("userName");
  const loginPw = localStorage.getItem("userPw");

  if ( (userPwLog === loginPw) && (userNameLog === loginName)) {
    document.location='../Accueil/accueil.html';
    // window.location.href = "../Accueil/accueil.html";
  } else {
    alert("Nom ou mot de passe invalide.");
  }
}

function userRegist (){
  const userNameReg = document.getElementById("username").value;
  const userPwReg = document.getElementById("psw").value;

  localStorage.setItem("userName", userNameReg);
  localStorage.setItem("userPw", userPwReg);
  document.location='../Accueil/accueil.html';
  
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

