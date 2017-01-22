var	
  http = require('http')
, testJSON = {
		"spieler2" : {
			"name" : "spieler2",
			"location" : {
				"top" : 182, 
				"left" : 187,
				"right" : 768,
				"bottom" : 101,
				"width" : 40,
				"height" : 40
			},
			"direction" : "right" 
		}
	}  
;

const PORT = 2509;
server = http.createServer(onRequest).listen(2509);
console.log("server is running !");

function onRequest(req, res) {
	var 
	  response = JSON.stringify(testJSON);
	;
  res.writeHead(200, {
      'Content-Type': 'application/json'
    , 'Access-Control-Allow-Origin': '*'
    , 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS'
    , 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
	res.write(response, function(err) {
		console.log("sending")
		res.end();
	});
}