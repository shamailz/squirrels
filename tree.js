$(document).ready(function(){

	 console.log("ready!");

     $("#squirrel").draggable();
     

   

        setInterval(function(){
                var squirrel = $("#squirrel").offset().top;
                var screenTop = $(document).scrollTop();
                console.log(squirrel, screenTop)
               if( squirrel <= screenTop){
                       window.location.replace("first-page.html");
                }
        }, 1000);       

	// top arrow, bottom arrow, left and right

	var top = 0;
	var left = 0;

  // var draggable = document.getElementById("#squirrel");
  // draggable.addEventListener('touchmove', function(event) {
  //   var touch = event.targetTouches[0];
    
  //   // Place element where the finger is
  //   draggable.style.left = touch.pageX-25 + 'px';
  //   draggable.style.top = touch.pageY-25 + 'px';
  //   event.preventDefault();
  // }, false);


	// window.addEventListener("keydown", function(keypressed){

	// 	if([32, 37, 38, 39, 40].indexOf(keypressed.keyCode) > -1) {
 //        	keypressed.preventDefault();
 //        	//console.log("arrow!!!!!!", keypressed.keyCode)

 //        	if(keypressed.keyCode == 38){
 //        		// up
 //        		top = top - 5;
 //        	}else if(keypressed.keyCode == 40){
 //        		// down
 //        		top = top + 5;
 //        	}else if(keypressed.keyCode == 37){
 //        		// down
 //        		left = left - 5;
 //        	}else if(keypressed.keyCode == 39){
 //        		// down
 //        		left = left + 5;
 //        	}
 //                $("#squirrel").css({"transform" : "translate(" + left + "px," + top + "px)"})

 //                var squirrel = $("#squirrel").offset();
 //                var screenTop = $(document).scrollTop();

 //                console.log(squirrel, screenTop)

 //                if( squirrel.top <= screenTop){
 //                        window.location.replace("first-page.html");
 //                }

 //          }
 //        })

})



