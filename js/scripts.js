function Order (size, parts) {
  this.size = size;
  this.parts = parts;
  this.price = 0;
}












$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    let toppingInputs = $("input:checkbox[name=pizzaTopping]:checked");
    let toppingsArray = []
    // let sizeInput =

    toppingInputs.each(function(topping) {
      toppingsArray.push(topping);
    })
    console.log(toppingsArray[1]);
    // let newOrder = new Order (sizeInput, partAray);

    // console.log(newOrder);
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
