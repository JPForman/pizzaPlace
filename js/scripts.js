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



  })
});



    // let inputs = $("input:checkbox[name=bikeThing]:checked").each(function() {
    //   let partsInput = $(this).val();
    //
    //   console.log(bikeParts)
    //
    // // let partsOrder = new PartsOrder(bikeparts)




//


//

    //
    // let sizeInput = other stuff
    //
    // bikeInputs.for each(function() {
    //   bikeArray.push($(this).val());
    //   console.log(bikeArray);
    //   return bikeArray;
    // });
    //

    // let bikeList = Bikeparts(bikeInput)

    // testAray.push(testVar.name());


//
//   });
// });
