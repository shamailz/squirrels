$(document).ready(function(){

	// console.log("ready!")

	// top arrow, bottom arrow, left and right

	var top = 0;
	var left = 0;


    var squirrelTop = 0;
    var squirrelLeft = 0;

    var carWidth = 170;
    var carHeight = 90;

    //update the numbers to variables!

    if(window.clientWidth < 800){
        carWidth = 200;
        carHeight = 110;        
    }

    setInterval(function(){



        // add a class that all cars have like "car"

        $(".car").each(function(){

            var carPositionLeft = $(this).offset().left;
            var carPositionTop = $(this).offset().top;

            if(squirrelTop >= carPositionTop && squirrelTop  <= carPositionTop + carHeight){
               if(squirrelLeft >= carPositionLeft && squirrelLeft <= carPositionLeft + carWidth){
                // run over!
                 window.location.replace("title.html");
               }
         }            

       })

        // EXAMPLE WITH CAR 1:
        var carOneTop = $(".front").offset().top;
        var carOneLeft = $(".front").offset().left;
         if(squirrelTop >= carOneTop && squirrelTop  <= carOneTop + 90){
            if(squirrelLeft >= carOneLeft && squirrelLeft <= carOneLeft + 170){
        //         // run over!
                window.location.replace("title.html");
             }
         }

         var carTwoTop = $(".front1").offset().top;
        var carTwoLeft = $(".front1").offset().left;
         if(squirrelTop >= carTwoTop && squirrelTop  <= carTwoTop + 90){
            if(squirrelLeft >= carTwoLeft && squirrelLeft <= carTwoLeft + 170){
        //         // run over!
                window.location.replace("title.html");
             }
         }
         var carThreeTop = $(".front2").offset().top;
        var carThreeLeft = $(".front2").offset().left;
         if(squirrelTop >= carThreeTop && squirrelTop  <= carThreeTop + 90){
            if(squirrelLeft >= carThreeLeft && squirrelLeft <= carThreeLeft + 170){
        //         // run over!
                window.location.replace("title.html");
             }
         }
         var carFourTop = $(".front3").offset().top;
        var carFourLeft = $(".front3").offset().left;
         if(squirrelTop >= carFourTop && squirrelTop  <= carFourTop + 90){
            if(squirrelLeft >= carFourLeft && squirrelLeft <= carFourLeft + 170){
        //         // run over!
                window.location.replace("title.html");
             }
         }
         var carFiveTop = $(".front4").offset().top;
        var carFiveLeft = $(".front4").offset().left;
         if(squirrelTop >= carFiveTop && squirrelTop  <= carFiveTop + 90){
            if(squirrelLeft >= carFiveLeft && squirrelLeft <= carFiveLeft + 170){
        //         // run over!
                window.location.replace("title.html");
             }
         }
         var carSixTop = $(".front5").offset().top;
        var carSixLeft = $(".front5").offset().left;
         if(squirrelTop >= carSixTop && squirrelTop  <= carSixTop + 90){
            if(squirrelLeft >= carSixLeft && squirrelLeft <= carSixLeft + 170){
        //         // run over!
                window.location.replace("title.html");
             }
         }


    }, 100)

   //   $(window).resize(function(){

   //     if ($(window).width() <= 600) {  
   //          console.log("mobile!")

   //            // is mobile device

            //   $(".up").click(function(){

            //     top = top - 10;
            // })
            // $(".down").click(function(){
            //     top = top + 10;
            // })
            // $(".left").click(function(){
            //     left = left - 10;
            //  })
            // $(".right").click(function(){
            //     left = left + 10;
            // })

   //     }    
   // });


	window.addEventListener("keydown", function(keypressed){

		if([32, 37, 38, 39, 40].indexOf(keypressed.keyCode) > -1) {
        	keypressed.preventDefault();

        	//console.log("arrow!!!!!!", keypressed.keyCode)

        	if(keypressed.keyCode == 38){
        		// up
        		top = top - 10;
        	}else if(keypressed.keyCode == 40){
        		// down
        		top = top + 10;
        	}else if(keypressed.keyCode == 37){
        		// down
        		left = left - 10;
        	}else if(keypressed.keyCode == 39){
        		// down
        		left = left + 10;
        	}



        	$(".squirrel").css({"transform" : "translate(" + left + "px,"+top+"px)"})

            var squirrel = $(".squirrel").offset();
            var screenTop = $(document).scrollTop();
            var carOne = $(".front").offset();
            console.log("Squirrel Top:", squirrel.top, squirrel.left, "Car1 top:", carOne.top, carOne.left)


            squirrelTop = squirrel.top;
            squirrelLeft = squirrel.left;
            


            //a range of how big car is (height)
            // if squirrel tpo is in that range then over
            if(squirrel.top == carOne.top) {
                //window.location.replace("title.html")
                console.log("running")
            }
            

            if( squirrel.top == screenTop){
                window.location.replace("third-page.html");
            }
    	}
    })
        $(".up").click(function(){

                top = top - 10;
            })
            $(".down").click(function(){
                top = top + 10;
            }) 
            $(".left").click(function(){
                left = left - 10;
             })
            $(".right").click(function(){
                left = left + 10;
            })

        


        
	//var cars = [".car1", ".car2", ".car3", ".car4", ".car5", ".car6"];


   // window.
	//	if(cars == ".squirrel"){
	//		window.location.href = ("title.html", "_self")
	//	}
	
		







})