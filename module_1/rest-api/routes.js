
let profiles= [{'name':'Ravindra','age':29}]

exports.getProfiles=(req,res)=>{
	res.send(profiles)
		}
		
exports.saveProfile = (req,res)=>{
	profiles.push(req.body)
	res.sendStatus(201);
		}
		
		