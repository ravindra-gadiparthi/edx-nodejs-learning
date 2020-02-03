const express= require('express')
const {getProfiles,saveProfile} = require('./routes.js')
const bodyParser=require('body-parser')
const logger =require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(logger())

let profile= {'name':'Ravindra','age':29}

app.get('/profiles',getProfiles)

app.post('/profiles',saveProfile)

app.put('/profiles',(req,res)=>{
	Object.assign(profile,req.body);
	res.sendStatus(204);
})

app.delete('/profiles',(req,res)=>{
	res.sendStatus(204);
}).listen(3001,()=>{
	console.log('profils app has started')
})

