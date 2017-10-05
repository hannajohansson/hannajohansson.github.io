/*_____________________________________________________________
	
	1960-talet: TV, Hänga gubbe, stadsministern
_______________________________________________________________*/

/********************************
	FRÅGA 3: TV
********************************/

//Get answer from user input and validate
function getTVAnswer(){
	//User input.
	var answer2 = document.getElementById("inputtext2").value;

	console.log("Ditt svar: " + answer2);

	//Compare input answer with acceptable answers
	if(answer2 == 'TV' || answer2 == 'tv'){
		//https://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/
		console.log("Rätt svar!");
		document.getElementById("main").innerHTML = "Bra jobbat! Du gav rätt svar."; 

		setTimeout(function(){  
        	wordGame(); 
    	}, 1800); 
	}
	else{
		console.log("Försök igen..");
		document.getElementById("main").innerHTML = "Inte helt rätt svar.. Försök igen.";
	} 
}

/********************************
	SPEL: Hänga gubbe
********************************/

//Show entire div after pressing a button
function wordGame() {
	document.getElementById('question2step2').style.display = "block";
  	document.getElementById('question2').style.display = "none";
}

//Show entire div after pressing a button
function Continue() {
	document.getElementById('continue').style.display = "block";
  	document.getElementById('hangman').style.display = "none";
}

