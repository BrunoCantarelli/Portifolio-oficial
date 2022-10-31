var today = new Date();
var hourNow = today.getHours();
var greeting;
var elem = document.getElementById("titulo");

if (hourNow > 18) {
  greeting = "Boa Noite!";
} else if (hourNow > 12) {
  greeting = "Boa Tarde!";
} else if (hourNow > 0) {
  greeting = "Bom Dia!";
} else {
  greeting = "Bem Vindo!";
}

elem.textContent = greeting;

// var greeting = document.getElementById('teste')
// greeting.textContent = document.write(greeting)
