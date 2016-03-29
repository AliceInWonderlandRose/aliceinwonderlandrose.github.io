$(document).ready(function(){
	
	$.getJSON("jasonDatabase/cats.json",function(data){
		console.dir(data);
	var html="";
	$.each(data, function(index, item){
	html += '<div class="col-md-4 cat">' +
	'<div class="catName">' +item.name +'</div>'+
	'<div class="catType">' +item.type +'</div>' +
	'<div class="catGender">' +item.gender +'</div>' +
	'<img class="catImage" src="' +item.image + '"/>' +
	'<div class="panel panel-default">' +
	 '<div class="panel-heading">Information</div>';
	
	$.each(item.comments, function(ind, i){
		html+= '<div class="panel-body">' +
				'<div class="renterName">'+i.username + '</div>' +
				'<div class="renterLocation">'+i.comment + '</div>' +
				'<div class="renterStars">';
				//var numStars = Number(i.stars);
				for(var j=1;j<=5;j++){
					if(j <= i.stars){
					html+='<img src="images/fullstar.png"/>';
					}else{
					html+='<img src="images/emptystar.png"/>';
				}
				}
				
				html+= '</div></div>';//end stars
				
	});//Each comment
	
	
	// do some stuff
	html += '</div>'+ //comment container
	 '</div>';	//col-md-4
	}); //each cat
	
	$("#catData").append(html);
	});
});