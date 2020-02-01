const http=require('http')
const port=3000
let payload = {'message':'Hello Node World'}

http.createServer((req,res)=>{
	const message=`Hello Node World ${req.url}`
	if(req.url)
	{
		payload.message=message
	}
	res.writeHead(200,{'Content-Type':'application/json'})
	res.end(JSON.stringify(payload));
}).listen(port)

console.log(`Node Application is running in http://localhost:${port}`)