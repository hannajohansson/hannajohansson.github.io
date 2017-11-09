/************************************************************
    Grouped bar chart
*************************************************************/

var Cupertino = new Cupertino();
var Norrkoping = new Norrkoping();
var Frankfurt = new Frankfurt();
var Price = new Price();

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
	//labels: ['jTelefon', 'jPlatta', 'Paronklocka'],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: ["rgba(211, 220, 131, 1)", '#ffffff'], //"rgba(255, 99, 132, 0.2)", BLÅ: '#3e95cd'
          //borderColor: '#ffffff',
          borderWidth: 5,
          data: [Frankfurt.jTelefon, (Frankfurt.jTelefon_cap-Frankfurt.jTelefon)]
        }, 
        {
          label: "jPlatta",
          backgroundColor: ["rgba(118, 175, 10, 1)", '#ffffff'], // rgba(54, 162, 235, 0.2)", LILA: '#8e5ea2'
         // borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 5,
          data: [Frankfurt.jPlatta, (Frankfurt.jPlatta_cap-Frankfurt.jPlatta)]
        },
        {
          label: "Paronklocka",
          backgroundColor: ["rgba(48, 70, 6, 1)", '#ffffff'], //rgb: 0 192 105 //"rgba(75, 192, 192, 0.2)", GRÖN, tidigare '#3cba9f'
          //borderColor: "rgba(0, 192, 105, 1)",
          borderWidth: 5,
          data: [Frankfurt.Paronklocka, (Frankfurt.Paronklocka_cap-Frankfurt.Paronklocka)]
        }
      ]
    },
    options: {
      title: {
	        display: false,
	        text: 'Lagersaldo i Frankfurt'
      	},
    }
});

//Display numbers with commas 
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

//Display information about the warehouse in Frankfurt
function displayFrankfurt (){  
    document.getElementById("FrankfurtInfo").innerHTML = "Lagernummer: " + Frankfurt.lagerID 
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Frankfurt.total_products)
    + "<br>" + "jTelefoner: " + numberWithCommas(Frankfurt.jTelefon)
    + "<br>" + "jPlattor: " + numberWithCommas(Frankfurt.jPlatta)
    + "<br>" + "Päronklockor: " + numberWithCommas(Frankfurt.Paronklocka)
    + "<br>" + "Totalt värde: " + numberWithCommas(Frankfurt.total_value);
}

//Display information about the warehouse in Norrköping
function displayNorrkoping () {  
    document.getElementById("NorrkopingInfo").innerHTML =  
    "jTelefoner: " + numberWithCommas(Norrkoping.jTelefon) 
    + "&nbsp &nbsp &nbsp &nbsp" + " [Totalt värde: " + numberWithCommas(Norrkoping.jTelefon * Price.jTelefon) + "]"
    + "<br>" + "jPlattor: " + numberWithCommas(Norrkoping.jPlatta)
    + " [Totalt värde: " + numberWithCommas(Norrkoping.jPlatta * Price.jPlatta) + "]"
    + "<br>" + "Päronklockor: " + numberWithCommas(Norrkoping.Paronklocka)
    + " [Totalt värde: " + numberWithCommas(Norrkoping.Paronklocka * Price.Paronklocka) + "]"
    + "<br>" + "Totalt värde: " + numberWithCommas(Norrkoping.total_value)
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Norrkoping.total_products)
    + "<br>" + "Lagernummer: " + Norrkoping.lagerID; 
}

//Display information about the warehouse in Cupertino
function displayCupertino () {  
    document.getElementById("CupertinoInfo").innerHTML = 
    "jTelefoner: " + numberWithCommas(Cupertino.jTelefon)
    + "<br>" + "jPlattor: " + numberWithCommas(Cupertino.jPlatta)
    + "<br>" + "Päronklockor: " + numberWithCommas(Cupertino.Paronklocka)
    + "<br>" + "Totalt värde: " + numberWithCommas(Cupertino.total_value)
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Cupertino.total_products)
    + "<br>" + "Lagernummer: " + Cupertino.lagerID; 
}
    
     