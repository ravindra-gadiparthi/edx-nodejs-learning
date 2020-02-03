const mongo= require('mongodb')
const async= require('async')

console.log('!!!! Migration Stared Ready!!!!')

const MongoClient =mongo.MongoClient

const url='mongodb://localhost:27017'

MongoClient.connect(url,(error,client)=>{
	
	//console.log("successfully connected to mongodb")
	const db= client.db('test')
	const customerData=db.collection('CustomerData')
	const customerDataAddress=db.collection('CustomerAddresssData')
	
	const task= (addressData,start,end)=> {
		console.log(`start ${start} and end ${end}`)
		for(let i=start; i < end-1; i++)
		{
			
			const address= addressData[i]
			const data={"country":address.country,"city":address.city,"state":address.state,"phone":address.phone}
			customerData.updateOne({id:`${i+1}`},{$set:data})
		}
	}
	
	customerDataAddress.find({}).toArray((error,addressData)=>{
		
			if(error) process.exit(-1)
			const tasks=[]
		    const recordsPerIteration=Number(process.argv[2])
			//console.log(`requested items per iteration ${recordsPerIteration}`)
			const totalRecords=addressData.length;
			
			const noOfIterations=totalRecords/recordsPerIteration
			//console.log(`total records are ${totalRecords} and iterations ${noOfIterations}`)
			for(let i=0;i<noOfIterations;i++)
			{
				const start=i*recordsPerIteration;
				const end= start + recordsPerIteration; 
				tasks.push(()=>task(addressData,start,end))
			}
		
			async.parallel(tasks, (error, results) => {
					console.log('successfully executed tasks')
			})
	})
	


})