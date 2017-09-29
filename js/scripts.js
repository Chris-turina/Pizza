// Pizza Constructor and Methods
function Pizza(size, type) {
  this.size = size;
  this.type = type;
  this.toppings = [];
}

Pizza.prototype.Cost = function () {
  var toppingsAdded = this.toppings.length;
  var total = this.size + toppingsAdded + this.type;
  return total;

};



// User Interface
$(document).ready(function() {
  $('select').material_select();
  $("form#pizza").submit(function(event) {
    event.preventDefault()
    var pizzaSize = parseInt($("input[type='radio'][name='pizza-size']:checked").val());
    var pizzaType = parseInt($("input[type='radio'][name='pizza-type']:checked").val());
    var pizzaPrice = new Pizza(pizzaSize, pizzaType);
    $.each($("input[name='toppings']:checked"), function() {
      pizzaPrice.toppings.push($(this).val());
    })
  var orderTotal = pizzaPrice.Cost();
  $("#order-total").text(orderTotal);
  });
});
