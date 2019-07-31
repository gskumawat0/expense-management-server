const express = require("express");
const app =  express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then((e) => console.log('connected to db'))
    .catch((err) => console.log(err.message));  


//log mongoose queries    
process.env.NODE_ENV === 'development' && mongoose.set('debug', true);

app.use(bodyparser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', process.env.CLIENT_API_BASE_URL);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//handle express errors
app.use((err, req, res, next)=>{
    if(err){
        return res.json({
            success: false,
            message:  err.message,
            errCode: err.stack
        })
    }
    next();
})

app.get("/",function(req,res){
	return res.json({
		success: true,
		messsage:  `server is running at PORT: ${process.env.PORT}`
	})
});

//404 error response
app.get('*', (req, res)=>{
	res.status(404).json({
		message: `Error 404. requested path ${req.method}, ${req.url} not found.`,
		success: false 
	})
})

app.listen(process.env.PORT,  () => {
	console.log(`amtica server is running on port: ${process.env.PORT}`);
});