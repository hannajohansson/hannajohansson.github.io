/************************************************************
    Grouped bar chart
*************************************************************/
var Cupertino = new Cupertino();
var Norrkoping = new Norrkoping();
var Frankfurt = new Frankfurt();

new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["Cupertino", "Norrköping", "Frankfurt"],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: "rgba(211, 220, 131, 1)", //"rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(211, 220, 131, 0.8)",
          borderWidth: 1,
          data: [Cupertino.jTelefon, Norrkoping.jTelefon, Frankfurt.jTelefon]
        }, 
        {
          label: "jPlatta",
          backgroundColor: "rgba(118, 175, 10, 1)", //"rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(118, 175, 10, 0.8)",
          borderWidth: 1,
          data: [Cupertino.jPlatta, Norrkoping.jPlatta, Frankfurt.jPlatta]
        },
        {
          label: "Päronklocka",
          backgroundColor: "rgba(48, 70, 6, 1)", //"rgba(0, 192, 105, 0.6)",
          borderColor: "rgba(48, 70, 6, 0.8)",
          borderWidth: 1,
          data: [Cupertino.Paronklocka, Norrkoping.Paronklocka, Frankfurt.Paronklocka]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
          display: false,
          text: 'Lagersaldo'
        },
      scales: {
          yAxes: [{
              display: false
          }],
          xAxes: [{
              display: false
          }]
      }//,
      //maintainAspectRatio: false
    }
});

//Add plugin to display values of each bar
Chart.pluginService.register({
    afterDraw: function(chartInstance) {
        var ctx = chartInstance.chart.ctx;

        // render the value of the chart above the bar
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        chartInstance.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                ctx.fillText(dataset.data[i], model.x, model.y - 2);
            }
        });
  }
});
