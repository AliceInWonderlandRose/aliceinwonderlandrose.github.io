$(document).ready(function(){
	
	// Get all the nav li, add click event
	$(".nav").find("li").on("click",function(){
		// remove all active class
		$(".nav").find("li").removeClass("active");
		// add active class to clicked it. 
		$(this).addClass("active");
		
		var page = $(this).attr("id");
		getPartial(page);
	
	});// closes the $(".nav").find("li").on("click",function()
	
	function getPartial(partial) {
		if (partial === "homePage"){
				$.get("partials/home.html", function(data){
					$("#pageContent").html(data);
					$('.carousel').carousel();
		});
		
		}else if (partial === "rentPage"){
		
		
		}else if (partial === "orderPage"){
			
			
			}
	}
	// begin Program, get the homepage
	getPartial("homePage");
	
}); //closes document ready. 
