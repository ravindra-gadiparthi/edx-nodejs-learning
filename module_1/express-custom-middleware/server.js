const express= require('express')
const logger=require('morgan')

app= express()


app.use(logger('dev'))


app.use((req,res,next)=>{
	if(req.query.apiKey)
	{
		next()
	}else{
		res.status(401).send({'message':'Unauthorized'})
	}
})

app.get('/',(req,res)=>{
	res.send({'message':'hello'})
})

app.get('/accounts',(req,res)=>{
	res.send({'message':'accounts'})
})

app.get('/transactions',(req,res)=>{
	
	res.send({'message':'transactions'})
})

app.listen(3001)