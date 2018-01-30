// Importing Mongoose.
const mongoose = require('mongoose');

const dbName = 'enterprise_api' 

module.export = {
	connect:()=> mongoose.connect('mongodb://localhost/'+dbName),
	// dbName: dbName,
	dbName, //short hand properties
	connection: ()=>{
		if(mongoose.connection)
			return mongoose.connection;
		return this.connect();
	}
}