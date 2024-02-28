/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */


     
     function addWeekdays() {
        let Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let i = 0;
        let headingCells = document.getElementsByTagName("th");
        while (i < 7) {
            headingCells[i + 1].innerHTML = Weekdays[i]; // Adjusted index by adding 1
            i++;
        }
    }
    
    window.addEventListener("load", addWeekdays);
    
    function showgames() {
        for (let i = 0; i < gameDates.length; i++) {
            let gameInfo = "";
    
            switch (gameResults[i]) {
                case "W":
                    gameInfo += "<p class='win'> ";
                    break;
                case "L":
                    gameInfo += "<p class='lose'> ";
                    break;
                case "S":
                    gameInfo += "<p class='Suspended'> ";
                    break;
                case "P":
                    gameInfo += "<p class='Postponed'> ";
                    break;
            }
    
            // Display game location
            if (gameLocations[i] === "h") {
                gameInfo += "Vs. ";
            } else if (gameLocations[i] === "a") {
                gameInfo += "";
            }
    
            gameInfo += gameOpponents[i] + "<br>";
            gameInfo += gameResults[i] + "; (" + runsScored[i] + "-" + runsAllowed[i] + ")";
    
            if (gameInnings[i] < 5) {
                gameInfo += " [" + gameInnings[i] + "]***";
            } else if (gameInnings[i] < 9) {
                gameInfo += " [" + gameInnings[i] + "]" + "J*";
            } else if (gameInnings[i] > 9) {
                gameInfo += " [" + gameInnings[i] + "]J"; 
            }
    
            gameInfo += "</p>";
    
            let tableCell = document.getElementById(gameDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
        }
    }