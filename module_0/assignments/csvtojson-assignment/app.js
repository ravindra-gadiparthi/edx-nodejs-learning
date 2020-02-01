const fs= require('fs')
const path= require('path')
const csv= require('csvtojson')

const wrtieJsonToFile = (fileName='customer-data') => {
const csvtojson= (fileName,callback)=>{
	
	const filePath=path.join(__dirname,`${fileName}.csv`)
	csv()
	.fromFile(filePath)
	.on('error',(error)=>{
		callback(null,error)
	})
	.then(jsonObject=>{
		callback(jsonObject)
		})
	
}

csvtojson(fileName,(jsonObject,error)=>{
	if(error){
		console.log(`Failed ${error.message}`)
	}else{
		fs.writeFileSync(path.join(__dirname,`${fileName}.json`),JSON.stringify(jsonObject))
	}
})
}

wrtieJsonToFile(process.argv[2])

