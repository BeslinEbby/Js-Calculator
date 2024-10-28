var printScreen = document.getElementById("print-scn");
var btns = document.querySelectorAll(".operation");
var equal = document.querySelector(".equal");


function clickbtn(num) {
   btns.forEach((btn) => {
      if (printScreen.value.length >= 0) {
         btn.disabled = false;
         equal.disabled = false;
      }
   });
   printScreen.value = printScreen.value + num;
}

function clickclr() {
   printScreen.value = "";
   window.location.reload();
}

function equalclick() {
   var text = printScreen.value;
   var result = eval(text);
   printScreen.value = result;
}

btns.forEach((btn) => {
   btn.disabled = true;
});
equal.disabled = true;