const http= require("https")

const URL="https://official-joke-api.appspot.com/random_joke";

http.get(URL,(response)=>{
	response.on("data",data=>{
		console.log(data.toString())
	})
	
	response.on("end",()=>{
		console.log("Successfully queried random Joke!!!")
	})
}).on("error",error=>{
	console.log(error)
})