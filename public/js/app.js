$(function() {
$("#submitBurger").on("click",function(){
//    event.preventDefault();
    
    var obj = {
        burgerName: $("#myBurger").val().trim(),
    }
    
    $.ajax("/api/burgers", { 
        type: "POST",
        data: obj
        }
    ).then(function(){

    })

   

})
$(".devourMe").on("click",function(){
    var obj = {
        burgerName: $(this).attr("id"),
        devoured: 1,
    }

    console.log(obj)
    $.ajax("/api/update_devoured", { 
        type: "POST",
        data: obj
        }
    ).then(function(){
        location.reload();
    })

//    var a = (document.getElementsByName(this.name))
//    $("#insertDevouredHere").append(a)
})
})