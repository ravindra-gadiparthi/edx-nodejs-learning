const http=require('http')
const port=3000

let messages =[];
http.createServer((req,res)=>{
	console.log(req.method)
	console.log(req.headers)
	if(req.url.indexOf("messages")!=-1)
	{
		res.writeHead(200,{"Content-Type":"application/json"})
		if(req.method==='POST')
		{
			let message=''
			req.on("data",chunk=>{
				message+=chunk
			})
			req.on("end",()=>{
				console.log(message)
				messages.push(JSON.parse(message))
			})
			res.end("Message created successfully")
		}else{
			res.end(JSON.stringify(messages))
		}
	}else{
		res.end("Please reach out messages resource using '/messages'")
	}
	
}).listen(port)

console.log("messages API Strated")