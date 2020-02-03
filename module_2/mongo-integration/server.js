const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// Connection URI
const url = 'mongodb://localhost:27017'
MongoClient.connect(url, (err, client) => {
	
  if (err) return process.exit(1)

  console.log('Kudos. Connected successfully to server')
  const db= client.db('test');
  const messages=db.collection('messages')
  
  console.log('Clearing records')
  messages.remove({},(error,result)=>{
		console.log("cleared data "+result)
	})
  
  console.log('inserting two new records')
  messages.insertMany([{"message":"One"},{"message":"Two"}],(error,results)=>{
	  if(error) process.exit(-1)
	  console.log(results)
  })
  
  console.log('updating record new records')
  messages.update({message:"One"},{$set:{message:"OneUpdated"}},(error,results)=>{
	  if(error) process.exit(-1)
	  console.log(results.result)
  })
  
  console.log('finding records')
  messages.find({}).toArray((error,data)=>{
	  if(error) process.exit(-1)
	  console.log(data) 
  })
  
  console.log('removing individual record')
  messages.remove({"message":"Two"},(error,results)=>{
	  if(error) process.exit(-1)
	  console.log(results.result)   
  })
    console.log('removing individual record')
    messages.find({}).toArray((error,data)=>{
	  if(error) process.exit(-1)
	  console.log(data) 
  })
  db.close()
  client.close()
})