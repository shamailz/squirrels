$(document).ready(function(){

$(".finished").hide(7000);
 
 console.log("i truly hope this works");

 var counter = 0;

$("#one").click(function(){
  $("#one").hide();
  counter ++;
});
$("#two").click(function(){
  $("#two").hide();
  counter ++;
});
$("#three").click(function(){
  $("#three").hide();
  counter ++;
});
$("#four").click(function(){
  $("#four").hide();
  counter ++;
});
$("#five").click(function(){
  $("#five").hide();
  counter ++;
});

if(counter == 5){
	$(".finished").show();
	console.log("cool")
}

//$(".finished").click(function(){
//	window.replace("fourth-page.html")
//})

})