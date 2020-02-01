const fs= require('fs')
const http = require('http')
const uuidv1 = require('uuid/v1')
const path = require('path')

const value=uuidv1()

const download = (url='http://www.google.com')=>{
	
	const fetchPage=(url,callback) =>
		{
		http.get(url,response=>{
			let data=''
			response.on('data',(chunk)=>{
				data+=chunk;
			})
			
			response.on('end',()=>{
				callback(data)
				console.log('completed reading html data');
			})
		}).on("error",(error)=>{
			callback(null,error);
		})
		}
		
		const folderName=uuidv1()
		fetchPage(url,(data,error)=>{
			if(data)
			{
				fs.mkdirSync(folderName)
				fs.writeFileSync(path.join(__dirname,folderName,'url.txt'),url)
				fs.writeFileSync(path.join(__dirname,folderName,'index.html'),data)
				console.log("successfully copied website to a file")
			}else{
				console.log("failed to write data to a file")
			}
		})
}

download(process.argv[2])
console.log(`hello savind ${process.argv[2]}`)