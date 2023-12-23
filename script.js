function createTable(title, tableData) {
  const tDiv = document.querySelector("#tableDiv");
  const table = document.createElement("table");
  let row = {};
  let cell = {};

  const th = document.createElement("th", (colspan = 21));
  const text = document.createTextNode(title);
  th.appendChild(text);
  th.setAttribute("colspan", "21");
  table.appendChild(th);
  tableData.forEach(function (rowData) {
    row = table.insertRow(-1);
    rowData.forEach(function (cellData) {
      cell = row.insertCell();
      cell.textContent = cellData;
    });
  });
  const textnode = document.createTextNode(title);
  const titleDiv = document.createElement("div");
  titleDiv.appendChild(textnode);
  //tDiv.append(textnode)
  tDiv.append(table);
}

function countCondtion(array, condition, desired) {
  let count = 0;
  if (condition == "greater") {
    array.forEach((row, index) => {
      if (index != 0) {
        row.forEach((cell, ind) => {
          if (ind != 0 && cell > desired) count++;
        });
      }
    });
  } else if (condition == "less") {
    array.forEach((row, index) => {
      if (index != 0) {
        row.forEach((cell, ind) => {
          if (ind != 0 && cell < desired) count++;
        });
      }
    });
  } else {
    array.forEach((row, index) => {
      if (index != 0) {
        row.forEach((cell, ind) => {
          if (ind != 0 && cell == desired) count++;
        });
      }
    });
  }
  return count;
}

//generate arrays, yes this could be static maybe stored in json and potentially regenerated with different dice
function genArr(adv) {
  let arr = [];
  for (let i = 0; i <= 20; i++) {
    arr[i] = [i];
  }

  for (let i = 0; i <= 20; i++) {
    arr[0][i] = [i];
  }
  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 20; j++) {
      if (adv) arr[i][j] = i > j ? i : j;
      else arr[i][j] = i < j ? i : j;
    }
  }
  return arr;
}
/*let dis = [];
for (let i = 0; i <= 20; i++){
  dis[i] =[i];
}

for (let i = 0; i <= 20; i++){
  dis[0][i] =[i];
}
for (let i = 1; i <= 20; i++){
  for (let j = 1; j <= 20; j++){
    dis[i][j]=i<j?i:j;
  }
}
*/
window.addEventListener("load", () => {
  adv = genArr(true);
  dis = genArr(false);
  createTable("With advantage", adv);
  createTable("With Disadvantage", dis);

  document.getElementById("probButton").addEventListener("click", function () {
    const dnum = document.getElementById("dnum");
    const condition = document.getElementById("condition");
    const results = document.querySelector("#results");
    const advCount = countCondtion(adv, condition.value, dnum.value);
    const disCount = countCondtion(dis, condition.value, dnum.value);

    results.innerHTML = `<br>The probability of a number ${condition.value} ${condition.value == "equal" ? "to" : "than"
      } ${dnum.value}:  <br> 
    with advantage: ${advCount} out of 400 (${advCount / 4}%)<br>
    with disadvantage: ${disCount} out of 400 (${disCount / 4}%)
    `;
    //Yes the percentage calcululation should use a variable to divide by the total sample space then multiply by 100 but / 400 * 100 is the same as / 4 and I am lazy
  });
});
