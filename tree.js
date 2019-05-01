$(document).ready(function(){

	 console.log("ready!")

	// top arrow, bottom arrow, left and right

	var top = 0;
	var left = 0;


	window.addEventListener("keydown", function(keypressed){

		if([32, 37, 38, 39, 40].indexOf(keypressed.keyCode) > -1) {
        	keypressed.preventDefault();
        	//console.log("arrow!!!!!!", keypressed.keyCode)

        	if(keypressed.keyCode == 38){
        		// up
        		top = top - 5;
        	}else if(keypressed.keyCode == 40){
        		// down
        		top = top + 5;
        	}else if(keypressed.keyCode == 37){
        		// down
        		left = left - 5;
        	}else if(keypressed.keyCode == 39){
        		// down
        		left = left + 5;
        	}
                $("#squirrel").css({"transform" : "translate(" + left + "px,"+top+"px)"})

        }
        })

})