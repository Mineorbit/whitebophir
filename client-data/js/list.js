
		window.onload = function () {
		var xmlHttp = new XMLHttpRequest();
    		xmlHttp.open( "GET", "/list", false ); // false for synchronous request
    		xmlHttp.send( null );
   	 	var res = xmlHttp.responseText.split("\n");
		

		document.getElementById("list").innerHTML = "Test";
		for(i = 1;i<res.length;i++)
		{
		document.getElementById("list").innerHTML += "\n<a href='/boards/"+res[i]+"'>"+res[i]+"</a>";
		}
		};
