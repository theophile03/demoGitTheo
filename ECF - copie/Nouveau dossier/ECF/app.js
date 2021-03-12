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