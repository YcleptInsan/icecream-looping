$(document).ready(function(){
  $("form#icecream").submit(function(event){
    event.preventDefault();
    var flavors = $("#flavors").val().split(" ")

    //console.log(flavors);
    var upperFlavors = flavors.map(function(flavor){
      return flavor.toUpperCase();
    });
    console.log(upperFlavors)
    console.log(flavors)
    upperFlavors.forEach(function(flavor){
      $("ul").append("<li>"+flavor+"</li>")
    })

  });
});
