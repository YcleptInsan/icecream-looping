$(document).ready(function(){
  $("form#icecream").submit(function(event){
    event.preventDefault();
    var flavors = $("#flavors").val().split(",")

    //console.log(flavors);
    flavors.forEach(function(flavor){
      $("ul").append("<li>"+flavor+"</li>")
    })

  });
});
