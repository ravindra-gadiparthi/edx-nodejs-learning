const Event =require("events")

class JobEvent extends Event{}

event=new JobEvent()

event.on("done",function(){
	console.log("knock knock, who is there!!")
})

event.on("done",function(){
	console.log("Go Away!!")
})

event.emit("done")
event.removeAllListeners()
event.emit("done")