//Business Logic

//Pizza Logic
function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
}

Pizza.prototype.calcToppings = function(toppings, size) {
  for (var i = 0; i < this.toppings.length; i++)
    this.price += 3;
  };


Pizza.prototype.calcSize = function(size) {
  if (this.size === "Small") {
    this.price += 10;
  } else {
    this.price += 15;
  }
}




//UI Logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    let toppingInputs = $("input:checkbox[name=pizzaTopping]:checked");
    let toppingsArray = [];
    let sizeInput = $("#size").val();

    toppingInputs.each(function() {
      toppingsArray.push($(this).val());
    })

    let pizzaPie = new Pizza (sizeInput, toppingsArray);
    pizzaPie.calcToppings();
    pizzaPie.calcSize();

    $("#orderForm").hide();
    $(".orderOutput").show();
    $("#sizeOutput").text(pizzaPie.size);
    var toppingString = (pizzaPie.toppings).join(", ");
    $("#toppingsOutput").text("cheese, marinara sauce, " + toppingString);
    $("#costOutput").text(pizzaPie.price);

  })
});
