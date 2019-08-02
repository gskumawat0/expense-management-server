const express = require("express");
const app =  express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const expenseRoutes = require('./routes/expenses');
const categoriesRoutes = require('./routes/categories');
const profileRoutes = require('./routes/profile');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then((e) => console.log('connected to db'))
    .catch((err) => console.log(err.message));  


//log mongoose queries    
process.env.NODE_ENV === 'development' && mongoose.set('debug', true);
app.use(bodyparser.json({limit: '5mb', extended: true}));    
app.use(bodyparser.urlencoded({limit: '5mb', extended: true})) 

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', process.env.CLIENT_API_BASE_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
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

app.use('/expenses', expenseRoutes);
app.use('/categories', categoriesRoutes);
app.use('/profile', profileRoutes);

//404 error response
app.all('*', (req, res)=>{
	res.status(404).json({
		message: `Error 404. requested path ${req.method}, ${req.url} not found.`,
		success: false 
	})
})

app.listen(process.env.PORT,  () => {
	console.log(`amtica server is running on port: ${process.env.PORT}`);
});