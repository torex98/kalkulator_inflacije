function inflationCalculator() {
	let	inflationRate = document.querySelector('#inflationRate');
	let money = document.querySelector('#money');
	let years = document.querySelector('#years');
	

	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);
	years = parseFloat(years.value);

	// Formula za izracunavanje inflacije
	let worth = money + (money * (inflationRate / 100));
	
	for(let i = 0; i < years; i++){
		worth += worth * (inflationRate / 100);
	}

// Da skratimo rezultat na dve decimale
worth = worth.toFixed(2);

	let newElement = document.createElement('div');
	newElement.className = 'rezultat';
	newElement.innerText = `Danasnih ${money}€ vredi isto kao ${worth} za ${years} godina`;

document.querySelector('.container').appendChild(newElement);

}