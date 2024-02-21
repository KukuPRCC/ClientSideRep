
function calculateTotal() {
    let quantity = document.getElementById("quantity").value.trim();
    let pricePerDonut = 1.50; // Price for 1 donut 
    let totalCost = quantity * pricePerDonut;
    document.getElementById("total").innerText = "Ok thank you for putting your order! your total is: $" + totalCost.toFixed(2);
}
