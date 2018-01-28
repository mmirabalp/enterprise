// Order the system to reguire express library.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false}));

const places = [
	{
		"title": "Office",
		"description": "my business",
		"address": "Lorem Ipsum" 
	},	
	{
		"title": "Office",
		"description": "my business",
		"address": "Lorem Ipsum" 
	},	
	{
		"title": "Office",
		"description": "my business",
		"address": "Lorem Ipsum" 
	}
];

//Declaring route for '/' and function with object (request, resources) 
app.get('/',(req, res)=>{
	res.json(places);
});

app.post('/',(req, res)=>{
	res.json(req.body.name);
});

// Static service
app.use(express.static("public"));


// Configuring nodejs server to listen on port 3000. This is the range of ports(1024-65535)
app.listen(3000, function(){
	console.log('I am the server, I am ready to receive petitions');
})