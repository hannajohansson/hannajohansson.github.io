/*_____________________________________________________________
	
	1950-talet: Rysskräcken, Beata, telefonnummer, flyglarm. 
_______________________________________________________________*/

/********************************
	FRÅGA 1: RYSSKRÄCKEN
********************************/

//Get answer from user input and validate
function getFirstAnswer() {
	//User input.
	var answer1 = document.getElementById("inputtext1").value;

	console.log("Ditt svar: " + answer1);

	//Compare input answer with acceptable answers
	if(answer1 == 'Ryssland' || answer1 == 'ryssarna' || answer1 == 'ryssar' || answer1 == 'ryssland' || answer1 == 'ryssen'){
		//https://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/
		console.log("Rätt svar!");
		document.getElementById("main").innerHTML = "Bra jobbat! Du gav rätt svar."; 

		//call function 'Beata' after 1,8 seconds
		setTimeout(function(){  
        	Beata(); 
    	}, 1800); 
		//window.setTimeout function(Beata(), 5000);
	}
	else{
		console.log("Försök igen..");
		document.getElementById("main").innerHTML = "Inte helt rätt svar.. Försök igen.";
	} 
}

/********************************
	INFO 1: BEATA
********************************/

//Show entire div after pressing a button
function Beata() {
	document.getElementById('question1step2').style.display = "block";
  	document.getElementById('question1').style.display = "none";
}

//Show entire div after pressing a button
function next() {
	document.getElementById('question1step3').style.display = "block";
  	document.getElementById('question1step2').style.display = "none";
}

//Show entire div after pressing a button
function clue1() {
	document.getElementById('question1step4').style.display = "block";
  	document.getElementById('question1step3').style.display = "none";
}

/********************************
	FRÅGA 2: FLYGLARM
********************************/

//Get answer from user input and validate
function correctAlarm(){
	console.log("Bra jobbat! Du gav rätt svar.");
	document.getElementById("main1").innerHTML = "Bra jobbat! Du gav rätt svar.";

	document.getElementById('question2').style.display = "block";
  	document.getElementById('question1step4').style.display = "none";

}

function wrongAlarm(){
	document.getElementById("main1").innerHTML = "Inte helt rätt svar.. Försök igen.";
}
