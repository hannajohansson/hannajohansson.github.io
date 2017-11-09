/************************************************************
    Authors:  Fanny Aldén Hanna Johansson
    Date: 2017-11-02
*************************************************************/

function Calculate () {
	this.chosenCity = "[välj stad]";
	this.chosenProduct = "[välj produkt]";
	this.chosenDelivery = "[välj leverans]";

}

/*
var chosenCity = "[välj stad]";
var chosenProduct = "[välj produkt]";
var chosenDelivery = "[välj leverans]";
*/

//Check which of the radio buttons is checked for the warehouses
function checkCity() {
var cityC = document.getElementById('check_C');
var cityN = document.getElementById('check_N');
var cityF = document.getElementById('check_F');

	if (cityC.checked) {
	  this.chosenCity = cityC.value;
	}
	else if (cityN.checked) {
		this.chosenCity = cityN.value;
	}
	else {
		this.chosenCity = cityF.value;
	}

	//console.log("Chosen city: " + this.chosenCity);
	displayFeedback();
}

//Check which of the radio buttons is checked for the products
function checkProduct() {
var product_jTel = document.getElementById('check_jTel');
var product_jPlatta = document.getElementById('check_jPlatta');
var product_Paron = document.getElementById('check_Paron');

	if (product_jTel.checked) {
	  this.chosenProduct = product_jTel.value;
	}
	else if (product_jPlatta.checked) {
		this.chosenProduct = product_jPlatta.value;
	}
	else {
		this.chosenProduct = product_Paron.value;
	}

	//console.log("Chosen product: " + this.chosenProduct);
	displayFeedback(); 
}

//Check which of the radio buttons is checked for the transaction of products
function checkDelivery() {
var inleverans = document.getElementById('check_in');
var utleverans = document.getElementById('check_ut');

	if (inleverans.checked) {
	  this.chosenDelivery = inleverans.value;
	}
	else {
		this.chosenDelivery = utleverans.value;
	}

	//console.log("Chosen delivery: " + this.chosenDelivery);
	displayFeedback();													
}

//Display feedback to user about which options are chosen with the radio buttons
function displayFeedback() {
	document.getElementById("feedback").innerHTML = "<br><br>" + "Du har valt att göra en " + "<b>" + this.chosenDelivery + "</b>" 
													+ " av produkten  " + "<b>" + this.chosenProduct + "</b>"  
													+ " för lagret i " + "<b>" + this.chosenCity + "</b>.";							
}



/*--------------------------------------------
        DO THE TRANSACTION OF PRODUCTS
/*--------------------------------------------*/
// *********** Ful funktion som förmodligen kan optimeras *************
function calcFunction() {

	//Get the number of products to be transfered from user input
	var input = document.getElementById('numberinput').value;
	console.log("Antal produkter att bli förflyttade: " + input);

	//console.log("[Lager: " + this.chosenCity + " ]  " + "[Produkt: " + this.chosenProduct + "]  " + "[Leverans: " + this.chosenDelivery + "]");

	// Check browser support for session Storage
	if (typeof(Storage) == "undefined")
		console.log("Sorry, your browser does not support web storage...");

	//If Cupertino is chosen as city/warehouse
	if(this.chosenCity == "Cupertino"){
		if(this.chosenProduct == "jTelefon"){
			if(this.chosenDelivery == "inleverans") 
				Cupertino.jTelefon = parseInt(Cupertino.jTelefon) + parseInt(input); 	//inleverans av jTelefon i Cupertino
			else 
				Cupertino.jTelefon = Cupertino.jTelefon - input;						//utleverans av jTelefon i Cupertino

			//Store new value of Cupertino.jTelefon
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Cupertino.jTelefon", Cupertino.jTelefon);
			    Cupertino.jTelefon = parseInt(sessionStorage.getItem("Cupertino.jTelefon"));
		    }
		}
		else if (this.chosenProduct == "jPlatta"){
			if(this.chosenDelivery == "inleverans") {
				Cupertino.jPlatta = parseInt(Cupertino.jPlatta) + parseInt(input);	//inleverans av jPlatta i Cupertino
			} else 
				Cupertino.jPlatta = Cupertino.jPlatta - input;						//utleverans av jPlatta i Cupertino

			//Store new value of Cupertino.jPlatta
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Cupertino.jPlatta", Cupertino.jPlatta);
			    Cupertino.jPlatta = parseInt(sessionStorage.getItem("Cupertino.jPlatta"));
		    }
		}
		else {
			if(this.chosenDelivery == "inleverans") 
				Cupertino.Paronklocka = parseInt(Cupertino.Paronklocka) + parseInt(input);	//inleverans av Päronklocka i Cupertino
			else 
				Cupertino.Paronklocka = Cupertino.Paronklocka - input;						//utleverans av Päronklocka i Cupertino

			//Store new value of Cupertino.Paronklocka
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Cupertino.Paronklocka", Cupertino.Paronklocka);
			    Cupertino.Paronklocka = parseInt(sessionStorage.getItem("Cupertino.Paronklocka"));
		    }
		}
		console.log("Leveransen är genomförd för Cupertino.")
	}
	//If Norrköping is chosen as city/warehouse
	else if(this.chosenCity == "Norrköping"){
		if(this.chosenProduct == "jTelefon"){
			if(this.chosenDelivery == "inleverans") 
				Norrkoping.jTelefon = parseInt(Norrkoping.jTelefon) + parseInt(input); 	//inleverans av jTelefon i Norrköping
			else 
				Norrkoping.jTelefon = Norrkoping.jTelefon - input;						//utleverans av jTelefon i Norrköping

			//Store new value of Norrkoping.jTelefon
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Norrkoping.jTelefon", Norrkoping.jTelefon);
			    Norrkoping.jTelefon = parseInt(sessionStorage.getItem("Norrkoping.jTelefon"));
		    }
		}
		else if (this.chosenProduct == "jPlatta"){
			if(this.chosenDelivery == "inleverans") 
				Norrkoping.jPlatta = parseInt(Norrkoping.jPlatta) + parseInt(input);	//inleverans av jPlatta i Norrköping
			else 
				Norrkoping.jPlatta = Norrkoping.jPlatta - input;						//utleverans av jPlatta i Norrköping

			//Store new value of Norrkoping.jPlatta
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Norrkoping.jPlatta", Norrkoping.jPlatta);
			    Norrkoping.jPlatta = parseInt(sessionStorage.getItem("Norrkoping.jPlatta"));
		    }
		}
		else {
			if(this.chosenDelivery == "inleverans") 
				Norrkoping.Paronklocka = parseInt(Norrkoping.Paronklocka) + parseInt(input);	//inleverans av Päronklocka i Norrköping
			else 
				Norrkoping.Paronklocka = Norrkoping.Paronklocka - input;						//utleverans av Päronklocka i Norrköping

			//Store new value of Norrkoping.jPlatta
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Norrkoping.Paronklocka", Norrkoping.Paronklocka);
			    Norrkoping.Paronklocka = parseInt(sessionStorage.getItem("Norrkoping.Paronklocka"));
		    }
		}
		console.log("Leveransen är genomförd för Norrköping.")
	}
	//If Frankfurt is chosen as city/warehouse
	else if(this.chosenCity == "Frankfurt"){
		if(this.chosenProduct == "jTelefon"){
			if(this.chosenDelivery == "inleverans") 
				Frankfurt.jTelefon = parseInt(Frankfurt.jTelefon) + parseInt(input); 	//inleverans av jTelefon i Frankfurt
			else 
				Frankfurt.jTelefon = Frankfurt.jTelefon - input;						//utleverans av jTelefon i Frankfurt

			//Store new value of Norrkoping.jTelefon
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Frankfurt.jTelefon", Frankfurt.jTelefon);
			    Frankfurt.jTelefon = parseInt(sessionStorage.getItem("Frankfurt.jTelefon"));
		    }
		}
		else if (this.chosenProduct == "jPlatta"){
			if(this.chosenDelivery == "inleverans") 
				Frankfurt.jPlatta = parseInt(Frankfurt.jPlatta) + parseInt(input);	//inleverans av jPlatta i Frankfurt
			else 
				Frankfurt.jPlatta = Frankfurt.jPlatta - input;	//utleverans av jPlatta i Frankfurt

			//Store new value of Norrkoping.jTelefon
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Frankfurt.jPlatta", Frankfurt.jPlatta);
			    Frankfurt.jPlatta = parseInt(sessionStorage.getItem("Frankfurt.jPlatta"));
			}
		}
		else {
			if(this.chosenDelivery == "inleverans") 
				Frankfurt.Paronklocka = parseInt(Frankfurt.Paronklocka) + parseInt(input);	//inleverans av Päronklocka i Frankfurt
			else 
				Frankfurt.Paronklocka = Frankfurt.Paronklocka - input;	//utleverans av Päronklocka i Frankfurt

			//Store new value of Norrkoping.jTelefon
			if (typeof(Storage) !== "undefined") {
			    sessionStorage.setItem("Frankfurt.Paronklocka", Frankfurt.Paronklocka);
			    Frankfurt.Paronklocka = parseInt(sessionStorage.getItem("Frankfurt.Paronklocka"));
			}
		}
		console.log("Leveransen är genomförd för Frankfurt.");
	}
	//Default
	else {
		console.log("Något har blivit fel");
	}


	/*--------------------------------------------
        	DISPLAY FEEDBACK TO THE USER
	/*--------------------------------------------*/
	//Message in the modal to the user to confirm the move of products
	if (this.chosenDelivery == "inleverans" && input != 0) {
		document.getElementById("confirmation").innerHTML = "<br>" + "Du har lagt till " + "<b>" + input + "</b>" 
												+ " produkter av typen  " + "<b>" + this.chosenProduct + "</b>"  
												+ " i lagret i " + "<b>" + this.chosenCity + "</b>.";
	}	
	else if (this.chosenDelivery == "utleverans" && input != 0){
		document.getElementById("confirmation").innerHTML = "<br>" + "Du har tagit bort " + "<b>" + input + "</b>" 
												+ " produkter av typen  " + "<b>" + this.chosenProduct + "</b>"  
												+ " från lagret i " + "<b>" + this.chosenCity + "</b>.";
	}	
	else if (input == 0){
		document.getElementById("confirmation").innerHTML = "Du glömde dock fyll i antal produkter för leverans."
												+ "<br>" + "Vänligen stäng denna ruta och fyll i alla uppgifter korrekt."; 
	}
	else {
		document.getElementById("confirmation").innerHTML = "Det blev dock något " + "<b>" + "fel" + "</b>" + "."
												+ "<br>" + "Vänligen stäng denna ruta och fyll i alla uppgifter korrekt."; 
	}

}
