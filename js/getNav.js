$.get("http://AliceInWonderlandRose.github.io/partials/nav.html", function(data){
	
	$(document).ready(function(){
	
	$(".container").prepend(data);
	$(".container").fadeIn();
	//Place code for the footer in here
	});

	
	
	});
