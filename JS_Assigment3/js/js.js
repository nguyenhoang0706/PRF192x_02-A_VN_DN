
let stt = 1;
$(document).ready(function () {
  $("#inputBtn").click(function () {

    let name = $("#inputName").val();
    let math = $("#inputMath").val();
    let physic = $("#inputPhysic").val();
    let science = $("#inputScience").val();
    // validate input
let flag = 0;

    if(isFinite(name) || name=="" ){
      alert("Bạn cần nhập lại tên!");
      flag=1;
    }
    if(isNaN(math) || math>10 || math<0){
      alert("Bạn cần nhập lại điểm Toán!");
      flag=1;
    }
    if(isNaN(physic) || physic>10 || physic<0){
      alert("Bạn cần nhập lại điểm Lý!");
      flag=1;
    }
    if(isNaN(science) || science>10 || science<0){
      alert("Bạn cần nhập lại điểm Hóa!");
      flag=1;
    }
    if(math==""){
      alert("Bạn không được để trống ô điểm toán!");
      flag=1;
    }
    if(physic==""){
      alert("Bạn không được để trống ô điểm lý!");
      flag=1;
    }
    if(science==""){
      alert("Bạn không được để trống ô điểm hóa!");
      flag=1;
    }
    if(flag==1){
      return;
    }
    // add table
    markup = "<tr><td>" + stt + "</td><td>"
              + name + "</td><td>"
              + math + "</td><td>"
              + physic + "</td><td>"
              + science + "</td><td>"
              + "?" + "</td></tr>";
    tableBody = $("table");
    tableBody.append(markup);
    stt++;
    $("#inputName").val("");
    $("#inputMath").val("");
    $("#inputPhysic").val("");
    $("#inputScience").val("");
  });
});

//avg
$(document).ready(function () {
  $("#btnTB").click(function () {
    $("#table tr").each(function () {
      //skip first row
      if (!this.rowIndex) return;
      //
      math = $(this).find("td:eq(2)").html();
      physic = $(this).find("td:eq(3)").html();
      science = $(this).find("td:eq(4)").html();

      avg = (parseFloat(math) + parseFloat(physic) + parseFloat(science)) / 3;
      
      $(this).find("td:eq(5)").html(avg.toFixed(2));

    });
  });
});

//good student
$(document).ready(function () {
  $("#btnGrade").click(function () {
    $("#table tr").each(function () {
      //skip first row
      if (!this.rowIndex) return;
      //
      avg = $(this).find("td:eq(5)").html();
      if(avg>=8){
        $(this).css("color","red");
      }

    });
  });
});





























