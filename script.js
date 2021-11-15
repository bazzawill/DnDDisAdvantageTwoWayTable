function createTable(title,tableData) {
      let tDiv = document.querySelector("#tableDiv");
      let table = document.createElement('table');
      let row = {};
      let cell = {};
      let header = {};

      //header = table.createElement('th')
      let th = document.createElement("th", colspan = 21);
      let text = document.createTextNode(title)
      th.appendChild(text)
      th.setAttribute("colspan","21")
      //th.colspan = 21
      table.appendChild(th)
      //const hrow = header.insertRow(0)
      //const hcell = hrow.insertCell(0)
      //hcell.innerText = title
      //hcell.colSpan = 21
      tableData.forEach(function(rowData) {
        row = table.insertRow(-1);
        rowData.forEach(function(cellData) {
          cell = row.insertCell();
    			cell.textContent = cellData;
        });
      });
      const textnode = document.createTextNode(title)
      const titleDiv = document.createElement("div");
      titleDiv.appendChild(textnode)
      //tDiv.append(textnode) 
      tDiv.append(table);
    }

function myFunction(){
        let x = document.getElementById("selector");
        let text = "";
        let i;
        for (i = 0; i < x.length ;i++) {
          text += x.elements[i].value + "<br>";
        }
        let textnode = document.createTextNode(text)
        document.getElementById("results").appendChild(textnode)
      }
let adv = []

for (let i = 0; i <= 20; i++){
  adv[i] =[i]
}

for (let i = 0; i <= 20; i++){
  adv[0][i] =[i]
}
let count = 0
let want = 0
for (let i = 1; i <= 20; i++){
  for (let j = 1; j <= 20; j++){
    count++
    adv[i][j]=i>j?i:j
  }
}
let dis = []

for (let i = 0; i <= 20; i++){
  dis[i] =[i]
}

for (let i = 0; i <= 20; i++){
  dis[0][i] =[i]
}
let dwant = 0
for (let i = 1; i <= 20; i++){
  for (let j = 1; j <= 20; j++){
    dis[i][j]=i<j?i:j
  }
}
window.addEventListener("load", () => {
  createTable("With advantage",adv);
  createTable("With Disadvantage",dis)
})