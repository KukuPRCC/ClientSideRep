function favoriteDonut() {
    let donutType = document.getElementById("donut-type").value;
    let favoriteDonut;

    switch (donutType) {
        case "glazed":
            favoriteDonut = "Good Choice! You can pair this with a classic cup of coffee or get it by the dozens! you can never go wrong with a classic";
            break;
        case "chocolate":
            favoriteDonut = "ew... why";
            break;
        case "strawberry":
            favoriteDonut = "I LOVE STRAWBERRY DONUTS! these are one of our popular options! ";
            break;
        case "maple":
            favoriteDonut = "ooh~ Maple Bacon Donut? good choice! I never see many who likes this flavor, mad respect >:)";
            break;
        default:
            favoriteDonut = "Please choose I'm really curious :(";
    }

    document.getElementById("favorite-donut").innerText = "Mr.Donut says: " + favoriteDonut;
}
