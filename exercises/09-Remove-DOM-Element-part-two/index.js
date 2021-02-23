const padre = document.querySelector('#parentLI');

const hijos = padre.children;
hijos[1].remove();
console.log(hijos);
