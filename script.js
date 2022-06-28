function rodar(){
	let s1 = document.getElementById("prize draw").value = prompt("Qual seu nome?");

	var n = Math.floor(Math.random() *10);
	let s2 = document.getElementById("prize draw2").innerHTML = n;
}
function outOver(elemento){
  elemento.style.backgroundColor = "red";
}
function out(elemento){
  elemento.style.backgroundColor = "";
}