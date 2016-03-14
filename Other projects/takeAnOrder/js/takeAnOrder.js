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

 // JS STYLING FOR BOOK/MOVIE 
 // create an overlay div and store it
    var overlay  = $( '<div id="overlay"></div>' );
    // insert the overlay into the bottom of the body tag
    $( 'body' ).append( overlay );
    // hide the overlay
    overlay.hide();
    
    $( '.movie' ).each(function(){
        var h3 = $(this).find( 'h3' ).clone();
        $(this).find( '.extended-info' ).prepend( h3 );
    });
    
    // hide all the movie titles when the page loads
    $('.basic-info h3').hide();
    
    $('.basic-info img').hover(function(){
        // mouse is over the poster
        
        /* target the h3 tag that is previous
           to the poster you rolled over
           and show it
         */
        $(this).prev().show();
        $(this).prev().css( 'top', -100 );
        $(this).prev().animate({
            'top' : 0
        },{
            duration : 750,
            queue : false
        });
        
    },function(){
        // mouse leaves the poster
        
        /* target the h3 tag that is previous
           to the poster you rolled over
           and hide it
        */
        // $(this).prev().hide();
        $(this).prev().animate({
            'top' : 450
        },{
            duration : 300,
            queue : false,
            complete: function(){
                // after the animation completes,
                // put display: none on the heading so
                // that it is definitely invisible no matter what
                $(this).hide();
            }
        });
    });
    
    // when you click on a poster
    $( '.basic-info img' ).click(function(){
        // reveal the .extended-info box by
        // applying the class '.open' to the article
        $(this).parent().parent().addClass( 'open' );
        // reveal the overlay box as well
        overlay.show();
    });
    
    overlay.click(function(){
        // hide the overlay
        overlay.hide();
        
        // hide any 'opened' movies
        $( '.open' ).removeClass( 'open' );
    });


// JS STYLING FOR MY BUTTONS
$("#search").on("focus", function(){
		$("#log").append("<br>Search background-color");
		$(this).css("background-color", "blue");
	})
	
	.on("blur", function(){
		$("#log").append("<br>when box not selected, turn white");
		$(this).css("background-color", "#FFF");
	});
	
	$("#textBox").on("focus", function(){
		$("#log").append("<br>give message about their purchace");
		var val = $(this).val();
		$("#textBox").html(val +"Great Choice!");
	});
	
	
	$("#orderButton").mouseenter(function(){
		$(this).text("ORDER NOW!!");
		$("#log").append("<br> Button mouseenter");
	})
		.on("mouseleave",function(){
		$("#log").append("<br>Button mouseleave");
		$(this).text("Click Me!");
	});
	
	$("#myChoice").change(function(){
		var choice = $(this).val();
		$("#myChoiceMessage").html(choice +" whatever you want");
		$("#log").append("<br> User change selection");
	});
	
	$("#orderButton").click(function(){
		
		var mySearch = $("#search").val();
		var myTextbox = $("#textBox").val();
		var mySelect = $("#myChoice").val();
		var myGender = $("[name='gender']:checked").val();
		    
			var myCheckValues = [];
			//each is a jquery loop for objects/arrays
			// each thing is selcted, do function
			// "this" is the element we are currently looking at.
    $("[name='vehicle']:checked").each(function() {
        myCheckValues.push($(this).val());
    });
	
$("#log").append("<br>User Clicked the Button");
			
		$("#log").append("<br>Value of input is: "+mySearch);
		$("#log").append("<br>Value of textarea is: "+myTextbox);
		$("#log").append("<br>Value of select is: "+mySelect);
		$("#log").append("<br>Value of radio button is: "+myGender);
		$("#log").append("<br>Value of check values is: "+myCheckValues.join());
		
		
	});


});



