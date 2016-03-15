$(document).ready(function(){
	$("#getClients").on("click", function(){
		//$.getJSON("http://http://AliceInWonderlandRose.github.io/Other%20projects/ajaxExamples/jasonDatabase/clients.json")
	var url = "http://AliceInWonderlandRose.github.io/Other%20projects/ajaxExamples/jasonDatabase/clients.json";
	$.getJSON(url, function (data){
	$.each(data, function(index, item){//item = each object
		$("#data").append(item.name);
		});
	
	//alert(data);
	//console.dir(data);
	});// get JSON
	
	});//click
	
});