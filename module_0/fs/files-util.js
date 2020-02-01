const fs= require("fs");
const path= require("path");

const readfile=function(filePath){
	fs.readFile(filePath,{encoding: 'utf-8'},function(data,error){
		
		if(error)
		{
			console.log(error)
		}else{
			console.log(data)
		}
	});
}

const writeData = (filePath,data)=> {
	fs.writeFile(filePath,data,function(error){
		if(error)
		{
			console.log(error)
		}else{
			console.log("writing completed")
		}
	})
}

readfile(path.join(__dirname,'/data.csv'))
writeData(path.join(__dirname,'/data.csv'),"4,Hi Dady I am coming soon !")
readfile(path.join(__dirname,'/data.csv'))
