$(document).ready(function(){
 


    //PRODUCE RANDOM ACORNS
    
    //give all your boxes a common class
    //"boxes"
    // amount of random acorns:
    var acornAmount = Math.floor(Math.random()*10);
    var amountofBoxes = $(".box").length;
    var randomBox = Math.floor(Math.random() * $(".box").length);        
        console.log("random:", randomBox, "acorn:", acornAmount);
        $(".box").eq(randomBox).addClass("acornhidden");
        $(".box").eq(randomBox).html(" <img src='images/squirrel.png' class='acorn'>");
    

    //  for (i = 0; i < acornAmount.length; i++) {
    //     var randomBox = Math.floor(Math.random() * $(".box").length);        
    //     console.log(randomBox, acornAmount);
    //     $(".box").eq(randomBox).addClass("acornhidden");
    //     $(".box").eq(randomBox).html("<a href = 'fourth-page.html'> <img src='images/squirrel.png' class='acorn'> </a>");
    // }

   // FIND RANDOM ACORNS




    


 console.log("i truly hope this works")

    $(".box").click(function () {
        $(this).css("background-color","rgba(255,255,255,0)");
        $(".acorn").css("opacity","1");
    });
    $(".acorn").click(function () {
            setTimeout(function(){
                window.location.replace("fourth-page.html");
            }, 1500);
    });
});









