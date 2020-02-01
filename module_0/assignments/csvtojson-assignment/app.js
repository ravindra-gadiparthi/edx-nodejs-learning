const fs= require('fs')
const path= require('path')
const csv= require('csvtojson')

const wrtieJsonToFile = (fileName='customer-data') => {
	
const filePath=path.join(__dirname,`${fileName}.csv`)
	csv()
	.fromFile(filePath)
		.on('error',(error)=>{
		console.log(`Failed ${error.message}`)
	})
	.then(jsonObject=>{
		fs.writeFile(path.join(__dirname,`${fileName}.json`),JSON.stringify(jsonObject),
		error=>{
			if(error)
			{
			console.log(error.message)
			}else{
				console.log("success")
			}
		})
	})


}

wrtieJsonToFile(process.argv[2])

