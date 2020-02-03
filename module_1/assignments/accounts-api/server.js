const express= require('express')
const logger= require('morgan')
const bodyParser= require('body-parser')
const errorhandler = require('errorhandler')

const app= express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

const accounts= []


app.get('/accounts',(req,res)=>{
	
	if(accounts.length==0)
	{
		res.status(200).send({'message':'No Records Found'});
	}
	else{
		res.status(200).send(accounts);
	}
})

app.get('/accounts/:id',(req,res)=>{
	
	console.log('request account')
	if(accounts.length < req.params.id)
	{
		return res.status(400).send({'message':'No Records Found'});
	}
	else{
		res.status(200).send(accounts[req.params.id]);
	}
})

app.post('/accounts',(req,res)=>{
	const id=accounts.length;
	accounts.push(req.body)
	res.status(201).send({'id':id})
})

app.put('/accounts/:id',(req,res)=>{
	
	if(accounts.length < req.params.id)
	{
		res.status(400).send({'message':'No Records Found to Update'});
	}
	else{
		accounts.splice(req.params.id,1,req.body)
		res.status(200).send(accounts);
	}
})

app.delete('/accounts/:id',(req,res)=>{
	
	if(accounts.length < req.params.id)
	{
		res.status(400).send({'message':'No Records Found to Delete'});
	}
	else{
		accounts.splice(req.params.id,1)
		res.status(200).send(accounts);
	}
})

app.listen(3001)