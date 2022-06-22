function keisan(btn) {
  if(btn.value == "=") {
    document.dentaku.display.value = eval(document.dentaku.display.value)

  } else if (btn.value == "AC") {
    document.dentaku.display.value = "";
  } else {
    if (btn.value == "+") {
      if (document.dentaku.display.value == ""){
        btn.value = "";
      } else {
      btn.value = "+";
      }
    }
    if (btn.value == "×") {
      if (document.dentaku.display.value == ""){
        btn.value = "";
      } else {
      btn.value = "*";
      }
    } else if (btn.value == "÷") {
      if (document.dentaku.display.value == ""){
        btn.value = "";
      } else {
      btn.value = "/";
      }
    } 
    document.dentaku.display.value += btn.value;
    document.dentaku.plus_btn.value = "+";
    document.dentaku.minus_btn.value = "-";
    document.dentaku.multi_btn.value = "×";
    document.dentaku.div_btn.value = "÷";
  }
}
