const mongo= require('mongodb')
const async= require('async')
const customers=require('./m3-customer-data.json')
const customerAddresses=require('./m3-customer-address-data.json')

console.log('!!!! Migration Stared Ready!!!!')

const MongoClient =mongo.MongoClient

const url='mongodb://localhost:27017'

let tasks=[]

const limit=Number(process.argv[2]) || 1000

MongoClient.connect(url,(error,client)=>{
	
	console.log("successfully connected to mongodb")
	const customersCollection=client.db('test').collection("customers")
	
	const saveCustomers =(data,callback)=>{
			console.log(data.length)
			customersCollection.insert(data,(error,results)=>{
				callback(error,results)
			})
	}
	
	customers.forEach((customer,index,list)=>{
		customers[index]=Object.assign(customer,customerAddresses[index])
		
		if(index % limit ===0)
		{
			const start=index;
			const end = start+ limit < customers.length ? start + limit : customers.length;
			console.log(`start ${start} and end ${end}`)
			tasks.push((callback)=>saveCustomers(customers.slice(start,end),callback))
		}
		
	})
	console.log('launching tasks')
	async.parallel(tasks, (error, results) => {
					console.log('successfully executed tasks')
			})
	})