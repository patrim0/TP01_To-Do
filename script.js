function sauvegarde() {
    let nomUtil = document.getElementById("nom").value;
    let prenomUtil = document.getElementById("prenom").value;

    localStorage.setItem("nom", nomUtil);
    localStorage.setItem("prenom", prenomUtil);
}

function restaure() {
    let nomUtil = localStorage.getItem("nom");
    let prenomUtil = localStorage.getItem("prenom");

    document.getElementById("nom").value = nomUtil;
    document.getElementById("prenom").value = prenomUtil;
}