/*_____________________________________________________________
	
	1980-talet: Ubåt, Memory, Leta efter modellflygplan
_______________________________________________________________*/

/********************************
	FRÅGA ?: UBÅT
********************************/

//Get answer from user input and validate
function getUbåtAnswer() {
	//User input.
	var answer3 = document.getElementById("inputtext2").value;

	console.log("Ditt svar: " + answer3);

	//Compare input answer with acceptable answers
	if(answer3 == 'Ubåt' || answer3 == 'ubåt' || answer3 == 'UBÅT'){
		console.log("Rätt svar!");
		document.getElementById("main").innerHTML = "Bra jobbat! Du gav rätt svar."; 
	}
	else{
		console.log("Försök igen..");
		document.getElementById("main").innerHTML = "Inte helt rätt svar.. Försök igen.";
	} 
}