/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */


     
let Weekdays = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
function addWeekdays()
{
    let i = 0; 


let headingCells = document.getElementsByTagName("th");

while (i < 7)
 {
    headingCells[1].innerHTML = weekDays(i);

    i++
 }
}


window.addEventListener("load", addWeekdays);

function showgames()
{
    for (let i = 0; i < gameDates.length; i++) 
    {
        let gameInfo = "";

      switch (gameResults[i]) 
      {
        case "W": 
        gameInfo += "<p class = 'win'> ";
        break; 
        case "L":
         gameInfo += "<p class = 'lose'> ";
        case "S":
         gameInfo += "<p class = 'Suspended'> ";
         case "P":
         gameInfo += "<p class = 'Postponed'> ";
      }

        //Display game loco

        if (gameLocations[i] === "h") {
            gameInfo += "Vs. "
        } else if (gameLocations[i] === "a") {
            gameInfo += "@"; 
        }

        gameInfo += gameOppenents[i] + "<br>";

        gameInfo += gameResults[i] + "; (" + runsScored[i] + "-" + runsAllowed[i] + ")"; 


    if (gameInnings[i] < 5) 
    {
     gameInfo += " [" + gameInnings[i]+"]***";
    }
    else if (gameInnings[i] < 9 )
    {
        gameInfo += " [" + gameInnings[i]+"]" + "J*";
    
    }
    else if (gameInnings[i] > 9)
{
    gameInfo += "  [" + gameInnings[i] + "J"; 
}

    gameInfo += "</p>";

    let tableCell = doctument.ElementsById(gameDates[i]);
    tableCell


    }
}
