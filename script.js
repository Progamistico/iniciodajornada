function getValue(){
  var value = document.getElementById("name").value
  console.log(value)
  document.getElementById("result").innerHTML ="olá, " +value +"!";
}

function removeValue(){
  document.getElementById("name").value="";
  document.getElementById("result").innerHTML="Insira seu nome e aperte entrar.";
}