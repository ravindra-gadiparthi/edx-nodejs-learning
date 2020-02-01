const https=require('https')

const URL='https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'

https.get(URL,response=>{
	let jsonData=''
	let count=0
	response.on("data",data=>{
		jsonData+=data.toString('utf8')
		count++
	})
	
	response.on("end",()=>{
		console.log("Success")
		try{
		console.log(`total times data event execured ${count}`)
		console.log(JSON.parse(jsonData))
		}catch(error)
		{
			console.log(`error ${error}`)
		}
	})
	
	response.on("error",(error)=>{
		console.log(`error on response ${error}`)
	})
}).on("error",(error)=>{
	console.log(`error while getting a joke ${error}`)
})