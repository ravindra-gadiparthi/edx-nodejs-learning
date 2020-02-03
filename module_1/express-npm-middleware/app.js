const express=require('express')
const bodyParser= require('body-parser')
const logger= require('morgan')

const app=express()
const transactions=[]
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/transactions',(req,res)=>{
		res.status(200).send(transactions);
})

app.post('/transactions',(req,res)=>{
	
	  if(req.body)
	  {
		transactions.push(req.body)
		res.status(200).send(transactions);
	  }else{
		  res.status(400).send({'message':'Invalid transaction'})
	  }
		
}).listen(3001,()=>{
	console.log('Transactions API Started')
})


