const express= require('express')
const mongo= require('mongodb')
const logger= require('morgan')
const bodyParser=require('body-parser')
const errorHandler=require('errorhandler')

const app= express()

app.use(bodyParser.json())
app.use(errorHandler())
app.use(logger('dev'))

const url='mongodb://localhost:27017'

const MongoClient=mongo.MongoClient

MongoClient.connect(url,(error,client)=>{
	console.log('successfully connected')
	const accounts=client.db('test').collection('accounts')
	
	app.get('/accounts',(req,res)=>{
		accounts.find({}).toArray((error,results)=>{
			if(error)
				res.status(500).send({message:error.message})
			res.status(200).send(results)
		})	
	})
	
	app.get('/accounts/:name',(req,res)=>{
		accounts.findOne({name:req.params.name},(error,results)=>{
			if(error)
				res.status(500).send({message:error.message})
			res.status(200).send(results)
		})	
	})
	
	app.post('/accounts',(req,res)=>{
		accounts.save(req.body,(error,results)=>{
			if(error)
				res.status(500).send({message:error.message})
			res.status(201).send({message:'account created'})
		})	
	})
	
	app.delete('/accounts/:name',(req,res)=>{
		accounts.remove({name:req.params.name},(error,results)=>{
			if(error)
				res.status(500).send({message:error.message})
			res.status(200).send({message:'account deleted'})
		})	
	})
	
	app.put('/accounts/:name',(req,res)=>{
		accounts.update({name:req.params.name},{$set:req.body},(error,results)=>{
			if(error)
				res.status(500).send({message:error.message})
			res.status(200).send({message:'account updated'})
		})	
	})
	
	
	//client.close()
	
})

app.get('/',(req,res)=>{
	res.status(200).send({message:'hello world'})
}).listen(3001,()=>{
	console.log('welcome to accounts API')
})