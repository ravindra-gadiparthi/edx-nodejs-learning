const express= require('express')
const logger= require('morgan')
const bodyParser= require('body-parser')


const app = express()

const employees = []

app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/employees',(req,res)=>{
	res.status(200).send(employees);
})

app.get('/employees/:id',(req,res)=>{
	
	console.log(`request param is ${req.params.id} and employee index is ${employees.indexOf(req.params.id)}`)
	if(employees[req.params.id])
	{
		res.status(200).send(employees[req.params.id])
	}else{
		res.status(400).send({'message':'No employee record found'})
	}
	
})

app.post('/employees',(req,res)=>{
	employees.push(req.body)
	res.status(201).send({'message':'Successfully created employee record'});
})

app.put('/employees/:id',(req,res)=>{
	
	if(employees[req.params.id])
	{
		employees.splice(req.params.id,1,req.body)
		res.status(200).send(employees[req.params.id])
	}else{
		res.status(400).send({'message':'No employee record found to update'})
	}
})

app.delete('/employees/:id',(req,res)=>{
	
	if(employees[req.params.id])
	{
		employees.splice(req.params.id,1)
		res.status(200).send(employees[req.params.id])
	}else{
		res.status(400).send({'message':'No employee record found to update'})
	}
})

app.listen(3001,()=>{
	console.log('employees API started')
})