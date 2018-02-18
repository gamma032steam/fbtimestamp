'use strict';
var times = [];
for (var i = 0; i < 3389; i++) {
var message = document.getElementsByClassName("_3058 _ui9 _hh7 _s1- _52mr _3oh-")[i].outerHTML;
var timeStamp = message.split(/"/)[3];
var date = timeStamp.substr(timeStamp.indexOf(",") + 1);
var timeOfDay = date.replace("Monday","").replace("Tuesday","").replace("Wednesday","").replace("Thursday","").
replace("Friday","").replace("Saturday","").replace("Sunday","");
times[i] = timeOfDay;
}


for (var x = 0; x < 3389; x++) {
console.log(times[x]);
}