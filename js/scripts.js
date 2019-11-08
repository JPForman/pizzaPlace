function Order (size, parts) {
  this.size = size;
  this.parts = parts;
  this.price = 0;
}












$(document).ready(function() {
  $("#testForm").submit(function(event) {
    event.preventDefault();
    let partInputs = $("input:checkbox[name=bikeThing]:checked");
    let partArray = []
    let sizeInput = "12"

    partInputs.each(function(partInput) {
      partArray.push(partInput);
      console.log(partArray);
    })
    let newOrder = new Order(sizeInput, partAray);

    console.log(newOrder);
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
