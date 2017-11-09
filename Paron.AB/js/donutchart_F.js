/************************************************************
    FRANKFURT PAGE
*************************************************************/

var Frankfurt = new Frankfurt();
var Price = new Price();

/* ------------------
  dougnut-chart
-------------------*/
new Chart(document.getElementById("chart_F"), {
    type: 'doughnut',
    data: {
  //labels: ['jTelefon', 'jPlatta', 'Paronklocka'],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: ["rgba(211, 220, 131, 1)", '#ffffff'], 
          //borderColor: '#ffffff',
          borderWidth: 5,
          data: [Frankfurt.jTelefon, (Frankfurt.jTelefon_cap-Frankfurt.jTelefon)]
        }, 
        {
          label: "jPlatta",
          backgroundColor: ["rgba(118, 175, 10, 1)", '#ffffff'],
         // borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 5,
          data: [Frankfurt.jPlatta, (Frankfurt.jPlatta_cap-Frankfurt.jPlatta)]
        },
        {
          label: "Paronklocka",
          backgroundColor: ["rgba(48, 70, 6, 1)", '#ffffff'], 
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

/************************************************************
    Format how numbers are displayed
*************************************************************/
//Display numbers with commas 
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


/************************************************************
    Display information about the warehouse
*************************************************************/

//Display information about the warehouse in Frankfurt
function displayFrankfurt (){  
    document.getElementById("FrankfurtInfo").innerHTML = 
    "Antal jTelefoner: " + numberWithCommas(Frankfurt.jTelefon)
    + "<br>" + "Antal jPlattor: " + numberWithCommas(Frankfurt.jPlatta)
    + "<br>" + "Antal Päronklockor: " + numberWithCommas(Frankfurt.Paronklocka)
    + "<br>" + "Totalt värde: " + numberWithCommas(Frankfurt.total_value) + " SEK"
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Frankfurt.total_products)
    + "<br>" + "Lagernummer: " + Frankfurt.lagerID;

    document.getElementById("FrankfurtInfoValue").innerHTML =  
    "Totalt värde jTelefoner: " + numberWithCommas(Frankfurt.jTelefon * Price.jTelefon) + " SEK"
    + "<br>" + "Totalt värde jPlattor: " + numberWithCommas(Frankfurt.jPlatta * Price.jPlatta) + " SEK"
    + "<br>" + "Totalt värde Päronklockor: " + numberWithCommas(Frankfurt.Paronklocka * Price.Paronklocka) + " SEK"
    + "<br>" + "Totalt värde i lagret: " + numberWithCommas(Frankfurt.total_value) + " SEK";
}


    
     