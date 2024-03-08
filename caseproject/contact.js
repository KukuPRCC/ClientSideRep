
function calculateTotal() {
  try {
    let quantity = document.getElementById("quantity").value.trim();
    let pricePerDonut = 1.50; // Price for 1 donut 
    let maxDonuts = 50; 


if (quantity > maxDonuts) {
    throw "Error: You cannot order more than 50 donuts.";
}

let totalCost = quantity * pricePerDonut;
document.getElementById("total").innerText = "Thank you for your order! Your total is: $" + totalCost.toFixed(2);
} catch (error) {
document.getElementById("total").innerText = error;
}


}
