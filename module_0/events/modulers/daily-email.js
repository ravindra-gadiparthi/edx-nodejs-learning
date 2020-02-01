const EmailJob=require('./job.js')

emailJob=new EmailJob();
emailJob.emit("start","ravindra@bbd.co.za")

emailJob.on("done",function(date){
	console.log(`Email Job Complete on ${date}`)
})

console.log("Hello")

