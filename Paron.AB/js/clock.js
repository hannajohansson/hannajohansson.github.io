/************************************************************
    Authors:  Fanny Aldén Hanna Johansson
    Date: 2017-11-09
*************************************************************/

//Start time as the page is loaded
var load = document.getElementById("load");
load.onload = (event) => {
	Time.prototype.startTime();	
}

function Time() {
    this.hour;
}

//Get current time
Time.prototype.startTime = function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = Time.prototype.checkTime(m);
    s = Time.prototype.checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m; // + ":" + s;
    var t = setTimeout(function(){ 
            Time.prototype.startTime();}, 500);

    //hour should always be a value within the range 8-17
    if(h>7 && h<18){
        this.hour = h;
    }
    else if (h>17){
        this.hour = h-7;
    }
    else if (h<0 && h<8){
        this.hour = h+7;
    }

    return this.hour;
}

//Fix format of the clock
Time.prototype.checkTime = function(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
