let currentText = "";

const element = document.getElementById("spanish");
element.addEventListener("click", myFunctionSpanish);

function myFunctionSpanish() {
  currentText = "Hello in Spanish";
  displayIntroduction(currentText);
}

function displayIntroduction(myText) {
  document.getElementById("introduction").innerHTML = myText;
}
