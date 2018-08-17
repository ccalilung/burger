$(function() {
$("#submitBurger").on("click",function(){
//    event.preventDefault();
    
    var obj = {
        burgerName: $("#myBurger").val().trim(),
        // devoured: $("#devoured").val().trim()
    }
    
    $.ajax("/api/burgers", { 
        type: "POST",
        data: obj
        }
    ).then(function(){

    })

   

})
$(".devourMe").on("click",function(){
   var a = (document.getElementsByName(this.name))
   $("#insertDevouredHere").append(a)
})
})