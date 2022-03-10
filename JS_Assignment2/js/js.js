// function rut gon
let getEl = function (key) {
  return document.getElementById(key);
};
// funtion nhap lieu
let dem = 1;
let getInfor = function () {
  var isValid = true;
  var name = getEl("inputName").value;
  var math = getEl("inputMath").value;
  var physic = getEl("inputPhysic").value;
  var science = getEl("inputScience").value;

  if (isNaN(math) || math > 10 || math < 0) {
    alert("Vui lòng nhập lại điểm toán");
    getEl("inputMath").value = "";
    isValid = false;
  }
  if (isNaN(physic) || physic > 10 || physic < 0) {
    alert("Vui lòng nhập lại điểm lý");
    getEl("inputPhysic").value = "";
    isValid = false;
  }
  if (isNaN(science) || science > 10 || science < 0) {
    alert("Vui lòng nhập lại điểm hóa");
    getEl("inputScience").value = "";
    isValid = false;
  }
  if (name == "" || math == "" || physic == "" || science == "") {
    alert("Vui lòng nhập dữ liệu!");
    isValid = false;
  }
  if (isValid) {
    insertRow();
    clearInput();
  }
};
// event nhap diem khi bam nut
window.onload = function () {
  getEl("inputBtn").onclick = getInfor;
};

//clear input function
function clearInput() {
  getEl("inputName").value = "";
  getEl("inputMath").value = "";
  getEl("inputPhysic").value = "";
  getEl("inputScience").value = "";
}
// function table
function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}
// function dua thong tin vao bang
function insertRow() {
  var table = document.getElementById("table");
  var newRow = table.insertRow(dem);
  newRow.insertCell(0).innerHTML = dem;
  newRow.insertCell(1).innerHTML = getEl("inputName").value;
  newRow.insertCell(2).innerHTML = getEl("inputMath").value;
  newRow.insertCell(3).innerHTML = getEl("inputPhysic").value;
  newRow.insertCell(4).innerHTML = getEl("inputScience").value;
  newRow.insertCell(5).innerHTML = "?";
  dem++;
}

// function button tinh diem tb
getEl("btnTB").onclick = function getAvg() {
  //gets table
  var table = document.getElementById("table");

  //gets rows of table
  var rowLength = table.rows.length;

  //loops through rows
  for (i = 1; i < rowLength; i++) {
    //gets cells of current row
    var cell = table.rows.item(i).cells;
    let avg =
      (parseFloat(cell.item(2).innerHTML) +
        parseFloat(cell.item(3).innerHTML) +
        parseFloat(cell.item(4).innerHTML)) /
      3;
    cell.item(5).innerHTML = avg.toFixed(2);
  }
};

// funtion button xet hoc sinh gioi
getEl("btnGrade").onclick = function getGrade() {
  var tableTest = document.getElementById("table");
  var rowsLength = tableTest.rows.length;
  for (i = 1; i < rowsLength; i++) {
    var kt = tableTest.rows.item(i).cells;
    if (parseFloat(kt.item(5).innerHTML) >= 8.0) {
      for (let j = 0; j <= 5; j++) {
        kt.item(j).style.color = "red";
        kt.item(j).style.background = "yellow";
      }
    }
  }
};
