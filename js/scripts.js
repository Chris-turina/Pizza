// Pizza Constructor and Methods
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.Cost = function () {
  var toppingsAdded = this.toppings.length * 2;
  var total = this.size + toppingsAdded;
  return total;

};

};

// User Interface
$(document).ready(function() {
  $('select').material_select();
  $("form#pizza").submit(function(event) {
    var pizzaSize = parseInt($("input[type='radio'][name='pizza-size']:checked").val());
    var newPizza = new Pizza(sizeOption);
    $.each($("input[name='toppings']:checked"), function() {
      newPizza.toppings.push($(this).val());
    })
  var orderTotal = newPizza.Cost();
  $("#order-total").text(orderTotal);
  });
});
