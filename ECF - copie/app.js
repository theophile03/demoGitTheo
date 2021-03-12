//ouvrir le formulaire
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
//fermer le formulaire
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //fonction pour afficher uniquement l'année
  $(function() { 
    $(".datepicker").datepicker({ dateFormat: 'yy' });
});

var myTableArray = [];



  //recuperer les information du formulaires
  var name_titre = document.getElementById('get_titre'); 
  var name_date = document.getElementById('datepicker1'); 
  var name_auteur = document.getElementById('get_auteur');
  var btnsupp = document.getElementById("supp");

  

  //créer une ligne dans le tableau
  function myCreateFunction() {
    var table = document.querySelector("table");
    var row = table.insertRow(3+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name_titre.value;
    cell2.innerHTML = name_date.value;
    cell3.innerHTML = name_auteur.value;
    cell4.innerHTML =  btnsupp;
  }




//Supprimer une ligne dans le tableau
  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
  }











var films = [
    {    name: "Deadpool",    years: 2016,    authors : "Tim Miller" },
    {    name: "Spiderman",    years: 2002,    authors : "Sam Raimi" },
    {    name: "Scream",    years: 1996,    authors : "Wes Craven" },
    {    name: "It: chapter 1",    years: 2019,    authors : "Andy Muschietti" }
]

var name = ["Deadpool",]