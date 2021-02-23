window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
	const combobox = document.querySelector('#mySelect');
	countries.forEach(pais => {
		let option = document.createElement('OPTION');
		option.value = pais;
		option.text = pais;
		combobox.appendChild(option);
	});
	
	combobox.addEventListener('change', e => e.target.value != -1 && alert(e.target.value));
};
