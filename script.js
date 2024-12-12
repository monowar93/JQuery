function clearDisplay(){
    $("#display").val("");
}


function insertNumber(number){
  const existingNum= $("#display").val();
    $("#display").val(existingNum + number)
}

function calculateResult() {
    const display = $("#display").val();
    try {
      const result = eval( $("#display").val());
      $("#display").val(result);
    } catch {
        $("#display").val("Error");
    }
  }

  function backspace() {
   const value= $("#display").val();
    const updatedValue =value.slice(0, -1);
    $("#display").val(updatedValue );
  }
  

  function toggleSign() {
    const value = $("#display").val();
    if (value) {
      if (value.startsWith("-")) {
        $("#display").val(value.slice(1)); // Remove negative sign
      } else {
        $("#display").val("-" + value); // Add negative sign
      }
    }
  }
 