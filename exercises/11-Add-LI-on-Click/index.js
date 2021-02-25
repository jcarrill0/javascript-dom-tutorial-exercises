let button = document.querySelector("#superDuperButton");
let myList = document.querySelector("#myList");
button.addEventListener("click", function() {
	//your code here
	let li = document.createElement('LI');
	li.innerHTML = 'Fourth element';
	myList.appendChild(li);
});
