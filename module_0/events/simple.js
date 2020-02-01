const Event = require('events')

class JobEvent extends Event{
	
}

const job=new JobEvent()

job.on("done",function(data){
	console.log(`processing data ${data}`)
})

job.emit("done","upload a file 1");
job.emit("done","upload a file 2");
job.removeAllListeners()