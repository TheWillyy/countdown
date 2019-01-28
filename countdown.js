var number = prompt("Type in your countdown time (in seconds)" )


const count = () =>{
	
	if(number > 0){number--;
	
	console.log(number)}
	
}
	setInterval(count, 1000);

	count();
