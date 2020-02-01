const Event =require('events')

class EmailJob extends Event{
	constructor(ops)
	{
		super(ops)
		this.on("start",function(emailId){
			this.process(emailId)
		})
	}
	
	process =function(emailId)
	{
		setTimeout(()=>{
			console.log(`successfully sent email to ${emailId}`)
			this.emit("done",new Date())
		},1000)
	}
}

module.exports=EmailJob