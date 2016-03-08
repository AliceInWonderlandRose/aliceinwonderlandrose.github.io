$(document).ready(function(){
	//$("#log").append("<br>added some text");
	
	// chnage the background color on focus, yellow
	$("#mySingleLineText").on("focus", function(){
		$("#log").append("<br>Foucus background-color");
		$(this).css("background-color", "yellow");
	})
	
	.on("blur", function(){
		$("#log").append("<br>when box not selected, turn white");
		$(this).css("background-color", "#FFF");
	});
	
	// give the user a message about their sentence. 
	$("#mySelect").on("focus", function(){
		$("#log").append("<br>give message about their sentence");
		var val = $(this).val();
		$("#mySelectMessage").html(val +"Nice Selection!");
	});
	
	
	$("#myButton").on("mouseenter", function(){
		$("#log").append("<br> Button mouseenter");
		$(this).text("ORDER NOW!!");
	})
		.on("mouseleave",function(){
		$("#log").append("<br>Button mouseleave");
		$(this).text("Click Me!");
	});
	
	
	
	//User clicks this button
	$("#myButton").click(function(){
		
		var myInput = $("#mySingleLineText").val();
		var myTextarea = $("#myTextArea").val();
		var mySelect = $("#mySelect").val();
		var myRaido = $("[name='gender']:checked").val();
		    
			var myCheckValues = [];
			//each is a jquery loop for objects/arrays
			// each thing is selcted, do function
			// "this" is the element we are currently looking at.
    $("[name='vehicle']:checked").each(function() {
        myCheckValues.push($(this).val());
    });

		
		$("#log").append("<br>User Clicked the Button");
			
		$("#log").append("<br>Value of input is: "+myInput);
		$("#log").append("<br>Value of textarea is: "+myTextarea);
		$("#log").append("<br>Value of select is: "+mySelect);
		$("#log").append("<br>Value of radio button is: "+myRaido);
		$("#log").append("<br>Value of check values is: "+myCheckValues.join());
		
		
	});
});
