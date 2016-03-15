
	$("#getClients").on("click", function(){
		//$.getJSON("http://http://AliceInWonderlandRose.github.io/Other%20projects/ajaxExamples/jasonDatabase/clients.json")
	var url = "http://http://AliceInWonderlandRose.github.io/Other%20projects/ajaxExamples/jasonDatabase/clients.json"
	$.getJSON(url, function (data){
	alert(data);
	console.dir(data);
	});
	
	});