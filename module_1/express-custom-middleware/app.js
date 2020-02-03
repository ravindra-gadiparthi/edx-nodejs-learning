const express= require('express')

const app = express()

const PORT=3001


app.use((req,res,next)=>{
	
	console.log(`processing request for route.. ${req.url}`)
	next()
})
app.get('/',(req,res)=>{
	
	res.send({'message':'hello world'})
}).listen(PORT,()=>{
	console.log('app started...!')
})