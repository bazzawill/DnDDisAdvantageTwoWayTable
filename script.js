function createTable(title,tableData) {
      let table = document.createElement('table');
      let row = {};
      let cell = {};
    
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
      document.body.appendChild(titleDiv) 
      document.body.appendChild(table);
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

createTable("With advantage",adv);
createTable("With Disadvantage",dis)