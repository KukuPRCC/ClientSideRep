/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Ian Merriam
      Date: 2/8/2024

      Filename: project02-01.js
 */
// Function to convert Fahrenheit to Celsius 



function FahrenheitToCelsius (degree) 
{
return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit (degree) 
{
return degree * 1.8 + 32;
}

document.getElementById("cValue").onchange = function()
{
 let cDegree = Number(this.value);

 document.getElementById("fValue").value = CelesiusToFahrenheit(cDegree);
}

document.getElementById("fValue").onchange = function()
{
 let fDegree = Number(this.value);

 document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
}

