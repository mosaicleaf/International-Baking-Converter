document.getElementById("convertQrtr").addEventListener('click', conversionQrtr);
document.getElementById("convertThird").addEventListener('click', conversionThird);
document.getElementById("convertHalf").addEventListener('click', conversionHalf);
document.getElementById("convertDub").addEventListener('click', conversionDub);
document.getElementById("convertTrip").addEventListener('click', conversionTrip);
document.getElementById("convertQuad").addEventListener('click', conversionQuad);
document.getElementById("reset").addEventListener('click', resetInputs);


function conversionQrtr() {
  var val = document.getElementById("adjvalue").value;
  var val2 = document.getElementById("adjvalue2").value;
  var val3 = document.getElementById("adjvalue3").value;
  var val4 = document.getElementById("adjvalue4").value;
  var val5 = document.getElementById("adjvalue5").value;
  var val6 = document.getElementById("adjvalue6").value;
  var val7 = document.getElementById("adjvalue7").value;
  var val8 = document.getElementById("adjvalue8").value;
  var val9 = document.getElementById("adjvalue9").value;
  var val10 = document.getElementById("adjvalue10").value;
  var val11 = document.getElementById("adjvalue11").value;
  var val12 = document.getElementById("adjvalue12").value;

  var selection = document.getElementById("Selection").value;
  var selection2 = document.getElementById("Selection2").value;
  var selection3 = document.getElementById("Selection3").value;
  var selection4 = document.getElementById("Selection4").value;
  var selection5 = document.getElementById("Selection5").value;
  var selection6 = document.getElementById("Selection6").value;
  var selection7 = document.getElementById("Selection7").value;
  var selection8 = document.getElementById("Selection8").value;
  var selection9 = document.getElementById("Selection9").value;
  var selection10 = document.getElementById("Selection10").value;
  var selection11 = document.getElementById("Selection11").value;
  var selection12 = document.getElementById("Selection12").value;

  var result = val / 4;
  var result2 = val2 / 4;
  var result3 = val3 / 4;
  var result4 = val4 / 4;
  var result5 = val5 / 4;
  var result6 = val6 / 4;
  var result7 = val7 / 4;
  var result8 = val8 / 4;
  var result9 = val9 / 4;
  var result10 = val10 / 4;
  var result11 = val11 / 4;
  var result12 = val12 / 4;

  document.getElementById('convertedOutput').value = result + " " + selection;
  document.getElementById('convertedOutput2').value = result2 + " " + selection2;
  document.getElementById('convertedOutput3').value = result3 + " " + selection3;
  document.getElementById('convertedOutput4').value = result4 + " " + selection4;
  document.getElementById('convertedOutput5').value = result5 + " " + selection5;
  document.getElementById('convertedOutput6').value = result6 + " " + selection6;
  document.getElementById('convertedOutput7').value = result7 + " " + selection7;
  document.getElementById('convertedOutput8').value = result8 + " " + selection8;
  document.getElementById('convertedOutput9').value = result9 + " " + selection9;
  document.getElementById('convertedOutput10').value = result10 + " " + selection10;
  document.getElementById('convertedOutput11').value = result11 + " " + selection11;
  document.getElementById('convertedOutput12').value = result12 + " " + selection12;

}

function conversionThird() {
    var val = document.getElementById("adjvalue").value;
    var val2 = document.getElementById("adjvalue2").value;
    var val3 = document.getElementById("adjvalue3").value;
    var val4 = document.getElementById("adjvalue4").value;
    var val5 = document.getElementById("adjvalue5").value;
    var val6 = document.getElementById("adjvalue6").value;
    var val7 = document.getElementById("adjvalue7").value;
    var val8 = document.getElementById("adjvalue8").value;
    var val9 = document.getElementById("adjvalue9").value;
    var val10 = document.getElementById("adjvalue10").value;
    var val11 = document.getElementById("adjvalue11").value;
    var val12 = document.getElementById("adjvalue12").value;

    var selection = document.getElementById("Selection").value;
    var selection2 = document.getElementById("Selection2").value;
    var selection3 = document.getElementById("Selection3").value;
    var selection4 = document.getElementById("Selection4").value;
    var selection5 = document.getElementById("Selection5").value;
    var selection6 = document.getElementById("Selection6").value;
    var selection7 = document.getElementById("Selection7").value;
    var selection8 = document.getElementById("Selection8").value;
    var selection9 = document.getElementById("Selection9").value;
    var selection10 = document.getElementById("Selection10").value;
    var selection11 = document.getElementById("Selection11").value;
    var selection12 = document.getElementById("Selection12").value;

    var result = val / 3;
    var result2 = val2 / 3;
    var result3 = val3 / 3;
    var result4 = val4 / 3;
    var result5 = val5 / 3;
    var result6 = val6 / 3;
    var result7 = val7 / 3;
    var result8 = val8 / 3;
    var result9 = val9 / 3;
    var result10 = val10 / 3;
    var result11 = val11 / 3;
    var result12 = val12 / 3;

    document.getElementById('convertedOutput').value = result + " " + selection;
    document.getElementById('convertedOutput2').value = result2 + " " + selection2;
    document.getElementById('convertedOutput3').value = result3 + " " + selection3;
    document.getElementById('convertedOutput4').value = result4 + " " + selection4;
    document.getElementById('convertedOutput5').value = result5 + " " + selection5;
    document.getElementById('convertedOutput6').value = result6 + " " + selection6;
    document.getElementById('convertedOutput7').value = result7 + " " + selection7;
    document.getElementById('convertedOutput8').value = result8 + " " + selection8;
    document.getElementById('convertedOutput9').value = result9 + " " + selection9;
    document.getElementById('convertedOutput10').value = result10 + " " + selection10;
    document.getElementById('convertedOutput11').value = result11 + " " + selection11;
    document.getElementById('convertedOutput12').value = result12 + " " + selection12;

}

function conversionHalf() {
    var val = document.getElementById("adjvalue").value;
    var val2 = document.getElementById("adjvalue2").value;
    var val3 = document.getElementById("adjvalue3").value;
    var val4 = document.getElementById("adjvalue4").value;
    var val5 = document.getElementById("adjvalue5").value;
    var val6 = document.getElementById("adjvalue6").value;
    var val7 = document.getElementById("adjvalue7").value;
    var val8 = document.getElementById("adjvalue8").value;
    var val9 = document.getElementById("adjvalue9").value;
    var val10 = document.getElementById("adjvalue10").value;
    var val11 = document.getElementById("adjvalue11").value;
    var val12 = document.getElementById("adjvalue12").value;

    var selection = document.getElementById("Selection").value;
    var selection2 = document.getElementById("Selection2").value;
    var selection3 = document.getElementById("Selection3").value;
    var selection4 = document.getElementById("Selection4").value;
    var selection5 = document.getElementById("Selection5").value;
    var selection6 = document.getElementById("Selection6").value;
    var selection7 = document.getElementById("Selection7").value;
    var selection8 = document.getElementById("Selection8").value;
    var selection9 = document.getElementById("Selection9").value;
    var selection10 = document.getElementById("Selection10").value;
    var selection11 = document.getElementById("Selection11").value;
    var selection12 = document.getElementById("Selection12").value;

    var result = val / 2;
    var result2 = val2 / 2;
    var result3 = val3 / 2;
    var result4 = val4 / 2;
    var result5 = val5 / 2;
    var result6 = val6 / 2;
    var result7 = val7 / 2;
    var result8 = val8 / 2;
    var result9 = val9 / 2;
    var result10 = val10 / 2;
    var result11 = val11 / 2;
    var result12 = val12 / 2;

    document.getElementById('convertedOutput').value = result + " " + selection;
  document.getElementById('convertedOutput2').value = result2 + " " + selection2;
  document.getElementById('convertedOutput3').value = result3 + " " + selection3;
  document.getElementById('convertedOutput4').value = result4 + " " + selection4;
  document.getElementById('convertedOutput5').value = result5 + " " + selection5;
  document.getElementById('convertedOutput6').value = result6 + " " + selection6;
  document.getElementById('convertedOutput7').value = result7 + " " + selection7;
  document.getElementById('convertedOutput8').value = result8 + " " + selection8;
  document.getElementById('convertedOutput9').value = result9 + " " + selection9;
  document.getElementById('convertedOutput10').value = result10 + " " + selection10;
  document.getElementById('convertedOutput11').value = result11 + " " + selection11;
  document.getElementById('convertedOutput12').value = result12 + " " + selection12;
}

function conversionDub() {
    var val = document.getElementById("adjvalue").value;
    var val2 = document.getElementById("adjvalue2").value;
    var val3 = document.getElementById("adjvalue3").value;
    var val4 = document.getElementById("adjvalue4").value;
    var val5 = document.getElementById("adjvalue5").value;
    var val6 = document.getElementById("adjvalue6").value;
    var val7 = document.getElementById("adjvalue7").value;
    var val8 = document.getElementById("adjvalue8").value;
    var val9 = document.getElementById("adjvalue9").value;
    var val10 = document.getElementById("adjvalue10").value;
    var val11 = document.getElementById("adjvalue11").value;
    var val12 = document.getElementById("adjvalue12").value;

    var selection = document.getElementById("Selection").value;
    var selection2 = document.getElementById("Selection2").value;
    var selection3 = document.getElementById("Selection3").value;
    var selection4 = document.getElementById("Selection4").value;
    var selection5 = document.getElementById("Selection5").value;
    var selection6 = document.getElementById("Selection6").value;
    var selection7 = document.getElementById("Selection7").value;
    var selection8 = document.getElementById("Selection8").value;
    var selection9 = document.getElementById("Selection9").value;
    var selection10 = document.getElementById("Selection10").value;
    var selection11 = document.getElementById("Selection11").value;
    var selection12 = document.getElementById("Selection12").value;

    var result = val * 2;
    var result2 = val2 * 2;
    var result3 = val3 * 2;
    var result4 = val4 * 2;
    var result5 = val5 * 2;
    var result6 = val6 * 2;
    var result7 = val7 * 2;
    var result8 = val8 * 2;
    var result9 = val9 * 2;
    var result10 = val10 * 2;
    var result11 = val11 * 2;
    var result12 = val12 * 2;

    document.getElementById('convertedOutput').value = result + " " + selection;
    document.getElementById('convertedOutput2').value = result2 + " " + selection2;
    document.getElementById('convertedOutput3').value = result3 + " " + selection3;
    document.getElementById('convertedOutput4').value = result4 + " " + selection4;
    document.getElementById('convertedOutput5').value = result5 + " " + selection5;
    document.getElementById('convertedOutput6').value = result6 + " " + selection6;
    document.getElementById('convertedOutput7').value = result7 + " " + selection7;
    document.getElementById('convertedOutput8').value = result8 + " " + selection8;
    document.getElementById('convertedOutput9').value = result9 + " " + selection9;
    document.getElementById('convertedOutput10').value = result10 + " " + selection10;
    document.getElementById('convertedOutput11').value = result11 + " " + selection11;
    document.getElementById('convertedOutput12').value = result12 + " " + selection12;
}

function conversionTrip() {
    var val = document.getElementById("adjvalue").value;
    var val2 = document.getElementById("adjvalue2").value;
    var val3 = document.getElementById("adjvalue3").value;
    var val4 = document.getElementById("adjvalue4").value;
    var val5 = document.getElementById("adjvalue5").value;
    var val6 = document.getElementById("adjvalue6").value;
    var val7 = document.getElementById("adjvalue7").value;
    var val8 = document.getElementById("adjvalue8").value;
    var val9 = document.getElementById("adjvalue9").value;
    var val10 = document.getElementById("adjvalue10").value;
    var val11 = document.getElementById("adjvalue11").value;
    var val12 = document.getElementById("adjvalue12").value;

    var selection = document.getElementById("Selection").value;
    var selection2 = document.getElementById("Selection2").value;
    var selection3 = document.getElementById("Selection3").value;
    var selection4 = document.getElementById("Selection4").value;
    var selection5 = document.getElementById("Selection5").value;
    var selection6 = document.getElementById("Selection6").value;
    var selection7 = document.getElementById("Selection7").value;
    var selection8 = document.getElementById("Selection8").value;
    var selection9 = document.getElementById("Selection9").value;
    var selection10 = document.getElementById("Selection10").value;
    var selection11 = document.getElementById("Selection11").value;
    var selection12 = document.getElementById("Selection12").value;

    var result = val * 3;
    var result2 = val2 * 3;
    var result3 = val3 * 3;
    var result4 = val4 * 3;
    var result5 = val5 * 3;
    var result6 = val6 * 3;
    var result7 = val7 * 3;
    var result8 = val8 * 3;
    var result9 = val9 * 3;
    var result10 = val10 * 3;
    var result11 = val11 * 3;
    var result12 = val12 * 3;

    document.getElementById('convertedOutput').value = result + " " + selection;
    document.getElementById('convertedOutput2').value = result2 + " " + selection2;
    document.getElementById('convertedOutput3').value = result3 + " " + selection3;
    document.getElementById('convertedOutput4').value = result4 + " " + selection4;
    document.getElementById('convertedOutput5').value = result5 + " " + selection5;
    document.getElementById('convertedOutput6').value = result6 + " " + selection6;
    document.getElementById('convertedOutput7').value = result7 + " " + selection7;
    document.getElementById('convertedOutput8').value = result8 + " " + selection8;
    document.getElementById('convertedOutput9').value = result9 + " " + selection9;
    document.getElementById('convertedOutput10').value = result10 + " " + selection10;
    document.getElementById('convertedOutput11').value = result11 + " " + selection11;
    document.getElementById('convertedOutput12').value = result12 + " " + selection12;
}

function conversionQuad() {
    var val = document.getElementById("adjvalue").value;
    var val2 = document.getElementById("adjvalue2").value;
    var val3 = document.getElementById("adjvalue3").value;
    var val4 = document.getElementById("adjvalue4").value;
    var val5 = document.getElementById("adjvalue5").value;
    var val6 = document.getElementById("adjvalue6").value;
    var val7 = document.getElementById("adjvalue7").value;
    var val8 = document.getElementById("adjvalue8").value;
    var val9 = document.getElementById("adjvalue9").value;
    var val10 = document.getElementById("adjvalue10").value;
    var val11 = document.getElementById("adjvalue11").value;
    var val12 = document.getElementById("adjvalue12").value;

    var selection = document.getElementById("Selection").value;
    var selection2 = document.getElementById("Selection2").value;
    var selection3 = document.getElementById("Selection3").value;
    var selection4 = document.getElementById("Selection4").value;
    var selection5 = document.getElementById("Selection5").value;
    var selection6 = document.getElementById("Selection6").value;
    var selection7 = document.getElementById("Selection7").value;
    var selection8 = document.getElementById("Selection8").value;
    var selection9 = document.getElementById("Selection9").value;
    var selection10 = document.getElementById("Selection10").value;
    var selection11 = document.getElementById("Selection11").value;
    var selection12 = document.getElementById("Selection12").value;

    var result = val * 4;
    var result2 = val2 * 4;
    var result3 = val3 * 4;
    var result4 = val4 * 4;
    var result5 = val5 * 4;
    var result6 = val6 * 4;
    var result7 = val7 * 4;
    var result8 = val8 * 4;
    var result9 = val9 * 4;
    var result10 = val10 * 4;
    var result11 = val11 * 4;
    var result12 = val12 * 4;

    document.getElementById('convertedOutput').value = result + " " + selection;
    document.getElementById('convertedOutput2').value = result2 + " " + selection2;
    document.getElementById('convertedOutput3').value = result3 + " " + selection3;
    document.getElementById('convertedOutput4').value = result4 + " " + selection4;
    document.getElementById('convertedOutput5').value = result5 + " " + selection5;
    document.getElementById('convertedOutput6').value = result6 + " " + selection6;
    document.getElementById('convertedOutput7').value = result7 + " " + selection7;
    document.getElementById('convertedOutput8').value = result8 + " " + selection8;
    document.getElementById('convertedOutput9').value = result9 + " " + selection9;
    document.getElementById('convertedOutput10').value = result10 + " " + selection10;
    document.getElementById('convertedOutput11').value = result11 + " " + selection11;
    document.getElementById('convertedOutput12').value = result12 + " " + selection12;
}

//Adding fields

function addDiv2() {
    var v = document.getElementById("add2");
    var x = document.getElementById("addDiv2");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv3() {
    var v = document.getElementById("add3");
    var x = document.getElementById("addDiv3");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv4() {
    var v = document.getElementById("add4");
    var x = document.getElementById("addDiv4");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv5() {
    var v = document.getElementById("add5");
    var x = document.getElementById("addDiv5");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv6() {
    var v = document.getElementById("add6");
    var x = document.getElementById("addDiv6");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv7() {
    var v = document.getElementById("add7");
    var x = document.getElementById("addDiv7");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv8() {
    var v = document.getElementById("add8");
    var x = document.getElementById("addDiv8");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv9() {
    var v = document.getElementById("add9");
    var x = document.getElementById("addDiv9");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv10() {
    var v = document.getElementById("add10");
    var x = document.getElementById("addDiv10");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv11() {
    var v = document.getElementById("add11");
    var x = document.getElementById("addDiv11");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }
 function addDiv12() {
    var v = document.getElementById("add12");
    var x = document.getElementById("addDiv12");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "block";
       x.style.display = "none";
    } else {
       v.style.display = "none";
       x.style.display = "block";
    }
 }

 //Deleting fields
 function minusDiv2() {
    var v = document.getElementById("add2");
    var x = document.getElementById("minusDiv2");
    var y = document.getElementById("addDiv2");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text2").value = "";
       document.getElementById("adjvalue2").value = "";
       document.getElementById("Selection2").selectedIndex = [0];
       document.getElementById("convertedOutput2").value = "";
    }
 }
 function minusDiv3() {
    var v = document.getElementById("add3");
    var x = document.getElementById("minusDiv3");
    var y = document.getElementById("addDiv3");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text3").value = "";
       document.getElementById("adjvalue3").value = "";
       document.getElementById("Selection3").selectedIndex = [0];
       document.getElementById("convertedOutput3").value = "";
    }
 }
 function minusDiv4() {
    var v = document.getElementById("add4");
    var x = document.getElementById("minusDiv4");
    var y = document.getElementById("addDiv4");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text4").value = "";
       document.getElementById("adjvalue4").value = "";
       document.getElementById("Selection4").selectedIndex = [0];
       document.getElementById("convertedOutput4").value = "";
    }
 }
 function minusDiv5() {
    var v = document.getElementById("add5");
    var x = document.getElementById("minusDiv5");
    var y = document.getElementById("addDiv5");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text5").value = "";
       document.getElementById("adjvalue5").value = "";
       document.getElementById("Selection5").selectedIndex = [0];
       document.getElementById("convertedOutput5").value = "";
    }
 }
 function minusDiv6() {
    var v = document.getElementById("add6");
    var x = document.getElementById("minusDiv6");
    var y = document.getElementById("addDiv6");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text6").value = "";
       document.getElementById("adjvalue6").value = "";
       document.getElementById("Selection6").selectedIndex = [0];
       document.getElementById("convertedOutput6").value = "";
    }
 }
 function minusDiv7() {
    var v = document.getElementById("add7");
    var x = document.getElementById("minusDiv7");
    var y = document.getElementById("addDiv7");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text7").value = "";
       document.getElementById("adjvalue7").value = "";
       document.getElementById("Selection7").selectedIndex = [0];
       document.getElementById("convertedOutput7").value = "";
    }
 }
 function minusDiv8() {
    var v = document.getElementById("add8");
    var x = document.getElementById("minusDiv8");
    var y = document.getElementById("addDiv8");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text8").value = "";
       document.getElementById("adjvalue8").value = "";
       document.getElementById("Selection8").selectedIndex = [0];
       document.getElementById("convertedOutput8").value = "";
    }
 }
 function minusDiv9() {
    var v = document.getElementById("add9");
    var x = document.getElementById("minusDiv9");
    var y = document.getElementById("addDiv9");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text9").value = "";
       document.getElementById("adjvalue9").value = "";
       document.getElementById("Selection9").selectedIndex = [0];
       document.getElementById("convertedOutput9").value = "";

    }
 }
 function minusDiv10() {
    var v = document.getElementById("add10");
    var x = document.getElementById("minusDiv10");
    var y = document.getElementById("addDiv10");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text10").value = "";
       document.getElementById("adjvalue10").value = "";
       document.getElementById("Selection10").selectedIndex = [0];
       document.getElementById("convertedOutput10").value = "";
    }
 }
 function minusDiv11() {
    var v = document.getElementById("add11");
    var x = document.getElementById("minusDiv11");
    var y = document.getElementById("addDiv11");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text11").value = "";
       document.getElementById("adjvalue11").value = "";
       document.getElementById("Selection11").selectedIndex = [0];
       document.getElementById("convertedOutput11").value = "";
    }
 }
 function minusDiv12() {
    var v = document.getElementById("add12");
    var x = document.getElementById("minusDiv12");
    var y = document.getElementById("addDiv12");
    if (v.style.display === "none" || v.style.display === "") {
       v.style.display = "none";
       x.style.display = "block";
       y.style.display = "block";

    } else {
       v.style.display = "none";
       y.style.display = "block";
       document.getElementById("text12").value = "";
       document.getElementById("adjvalue12").value = "";
       document.getElementById("Selection12").selectedIndex = [0];
       document.getElementById("convertedOutput12").value = "";
    }
 }
 function resetInputs() {
    document.getElementById("text").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";
    document.getElementById("text4").value = "";
    document.getElementById("text5").value = "";
    document.getElementById("text6").value = "";
    document.getElementById("text7").value = "";
    document.getElementById("text8").value = "";
    document.getElementById("text9").value = "";
    document.getElementById("text10").value = "";
    document.getElementById("text11").value = "";
    document.getElementById("text12").value = "";
    document.getElementById("adjvalue").value = "";
    document.getElementById("adjvalue2").value = "";
    document.getElementById("adjvalue3").value = "";
    document.getElementById("adjvalue4").value = "";
    document.getElementById("adjvalue5").value = "";
    document.getElementById("adjvalue6").value = "";
    document.getElementById("adjvalue7").value = "";
    document.getElementById("adjvalue8").value = "";
    document.getElementById("adjvalue9").value = "";
    document.getElementById("adjvalue10").value = "";
    document.getElementById("adjvalue11").value = "";
    document.getElementById("adjvalue12").value = "";
    document.getElementById("Selection").selectedIndex = [0];
    document.getElementById("Selection2").selectedIndex = [0];
    document.getElementById("Selection3").selectedIndex = [0];
    document.getElementById("Selection4").selectedIndex = [0];
    document.getElementById("Selection5").selectedIndex = [0];
    document.getElementById("Selection6").selectedIndex = [0];
    document.getElementById("Selection7").selectedIndex = [0];
    document.getElementById("Selection8").selectedIndex = [0];
    document.getElementById("Selection9").selectedIndex = [0];
    document.getElementById("Selection10").selectedIndex = [0];
    document.getElementById("Selection11").selectedIndex = [0];
    document.getElementById("Selection12").selectedIndex = [0];
    document.getElementById("convertedOutput").value = "";
    document.getElementById("convertedOutput2").value = "";
    document.getElementById("convertedOutput3").value = "";
    document.getElementById("convertedOutput4").value = "";
    document.getElementById("convertedOutput5").value = "";
    document.getElementById("convertedOutput6").value = "";
    document.getElementById("convertedOutput7").value = "";
    document.getElementById("convertedOutput8").value = "";
    document.getElementById("convertedOutput9").value = "";
    document.getElementById("convertedOutput10").value = "";
    document.getElementById("convertedOutput11").value = "";
    document.getElementById("convertedOutput12").value = "";
  }