"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06a.js
 */

window.addEventListener("load",function() 
{
let orderForm = document.forms.orderForm;

let model = orderForm.element.model;

model.focus();

for (let i = 0; i < orderForm.elements.length; i++)
{
      orderForm.elements[i].addEventListener("change",calcOrder); 
}

calcOrder()

function calcOrder()
{
      let mIndex = model.selectedIndex;
      let mValue = model.options[mIndex].value;

      let qIndex = orderForm.elements.qty.selectedIndex;
      let quantity = orderForm.elements.qty[qIndex].value;

      let modelCost = mValue*quantity
      orderForm.elements.modelCost.value = formatValue(modelCost); 

      let planValue = document.querySelector('input[name="plan"]:checked').value; 

      let planCost = planValue * quantity; 
      orderForm.elements.planCost.value = formatValue(planCost0); 

      let subtotal = modelCost + planCost; 
      orderForm.elements.subtotal.value = formatValue(subtotal); 

      let salesTax = subtotal * 0.05; 
      orderForm.elements.salesTax.value = formatValue(salesTax); 

      let totalCost = subtotal + salesTax;
      orderForm.elements.totalCost.value = formatValue(totalCost); 

      
}

});

function formatValue(value)
{
      return value.tolocaleString("en-US",
      {
            style: "currency", currency:"USD"
      });
}