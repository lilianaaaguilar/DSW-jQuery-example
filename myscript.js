$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	$("#p1").click(function() {
		$(".disappear").hide();
	});
	$("#image").hover(function(){
		alert("You entered the image!");
  });
});
