$(document).ready(function(){

	// console.log("ready!")

	// top arrow, bottom arrow, left and right

	var top = 0;
	var left = 0;


    var squirrelTop = 0;
    var squirrelLeft = 0;

    setInterval(function(){

        // add a class that all cars have like "car"

        $(".car").each(function(){

            var carPositionLeft = $(this).offset().left;
            var carPositionTop = $(this).offset().top;

            if(squirrelTop >= carPositionTop && squirrelTop  <= carPositionTop + 90){
               if(squirrelLeft >= carPositionLeft && squirrelLeft <= carPositionLeft + 170){
                // run over!
                window.location.replace("title.html");
                }
            }            

        })

        // EXAMPLE WITH CAR 1:
       // var carOneTop = $(".car1").offset().top;
       //  var carOneLeft = $(".car1").offset().left;
        // if(squirrelTop >= carOneTop && squirrelTop  <= carOneTop + 90){
        //     if(squirrelLeft >= carOneLeft && squirrelLeft <= carOneLeft + 170){
        //         // run over!
        //     }
        // }
    }, 100)
    





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
        function checkLocation() {
        var carSpot = $([".car1", ".car2", ".car3", ".car4", ".car5", ".car6"]).offset();
        var squirrelSpot = $(".squirrel").offset();
    if (carSpot.top == squirrelpot.top && carSpot.left == squirrelpot.left ) {
       var pageURL = $(location).attr("title.html");
            alert(pageURL);
            console.log(cSpot)
    }
  }

	})
	
	//var cars = [".car1", ".car2", ".car3", ".car4", ".car5", ".car6"];


   // window.
	//	if(cars == ".squirrel"){
	//		window.location.href = ("title.html", "_self")
	//	}
	
		







})