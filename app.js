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
    $(".datepicker").datepicker({ dateFormat: 'yyyy' });
});

var films = [
  {    name: "Deadpool",    years: 2016,    authors : "Tim Miller" },
  {    name: "Spiderman",    years: 2002,    authors : "Sam Raimi" },
  {    name: "Scream",    years: 1996,    authors : "Wes Craven" },
  {    name: "It: chapter 1",    years: 2019,    authors : "Andy Muschietti" }
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(films[0]);
generateTableHead(table, data);
generateTable(table, films);



  //recuperer les information du formulaires
  var name_titre = document.getElementById('get_titre'); 
  var name_date = document.getElementById('datepicker1'); 
  var name_auteur = document.getElementById('get_auteur');
  



  //créer une ligne dans le tableau
  function myCreateFunction() {
    var table = document.querySelector("table");
    var buton = getElementById("supp");
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name_titre.value;
    cell2.innerHTML = name_date.valueAsDate;
    cell3.innerHTML = name_auteur.value;
  }

  
//Supprimer une ligne dans le tableau
  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
  }










//Ranger par années
var films = [
  {    name: "Deadpool",    years: 2016,    authors : "Tim Miller" },
  {    name: "Spiderman",    years: 2002,    authors : "Sam Raimi" },
  {    name: "Scream",    years: 1996,    authors : "Wes Craven" },
  {    name: "It: chapter 1",    years: 2019,    authors : "Andy Muschietti" }


]

films.sort(function(years) {
  return a.localeCompare(b)
})








