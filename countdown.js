var number = prompt("Type in your countdown time (in seconds)" )


const count = () =>{
	
	if(number > 0){
		number--;
		console.log(number)}
	
	if (number === 0){
		if(confirm(`Time's up!!!`)===true){
			number=-1
			}
			//this ends the program
		}
	
}
	setInterval(count, 1000);

	count();
