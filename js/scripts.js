//Business Logic

//Pizza Logic
function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 10
}

Pizza.prototype.calcPrice = function(toppings) {
  for (var i = 0; i < this.toppings.length; i++)
    this.price += 3;
    console.log(this.price);
    return;
  };







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
    let priceOutput = pizzaPie.calcPrice();

    $(".orderOutput").show();
    $("#sizeOutput").text(pizzaPie.size);
    $("#toppingsOutput").text(pizzaPie.toppings);
    $("#costOutput").text(pizzaPie.price);

  })
});
