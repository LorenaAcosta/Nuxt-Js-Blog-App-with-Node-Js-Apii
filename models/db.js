const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NUXTJSPROJECT',
	{
		useNewUrlParser: true, useUnifiedTopology: true
	}
	,(err)=>{
	if(!err) {
		console.log("Base de datos conectada")
	} else {
		console.log("Error",err);
	}	
 }
)