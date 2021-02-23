let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let contenedor = document.createElement('DIV');
	
	contenedor.style.backgroundColor = 'yellow';
	contenedor.innerHTML = 'Hello World';

	document.body.appendChild(contenedor);

});
