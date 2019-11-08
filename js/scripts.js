function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 10;
}

Pizza.prototype.calcPrice = function() {
  this.toppings.forEach(function(topping) {
    this.price += 5 ;
  });
  console.log(this.price);
  return this.price;
}










$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    let toppingInputs = $("input:checkbox[name=pizzaTopping]:checked");
    let toppingsArray = [];
    let sizeInput = $("#size").val();
    console.log(sizeInput);

    toppingInputs.each(function() {
      toppingsArray.push($(this).val());
      console.log(toppingsArray);
    })

    let pizzaPie = new Pizza (sizeInput, toppingsArray);
    console.log(pizzaPie);
    let priceOutput = pizzaPie.calcPrice();
    console.log(priceOutput);



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
