const express= require('express')

const PORT=3001

app=express()
app.get('/hello',(req,res)=>{
	res.send({'message':'hello world'})
})

app.listen(PORT)

console.log('App Started')

