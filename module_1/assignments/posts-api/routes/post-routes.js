const {store} =    require('../data/store.js')

module.exports= {
	getPosts(req,res){
		res.status(200).send(store.posts)
	},
	savePost(req,res){
		const postId=store.posts.length;
		store.posts.push(req.body)
		res.status(200).send({'id':postId})
	},
	deletePost(req,res){
		const postId=req.params.postId
		if(!store.posts[postId])
		{
			res.status(400).send({message:`No Post Record found with post Id ${postId}`})
		}else{
			store.posts.splice(req.params.postId,1)
			console.log(store.posts.length)
			res.status(200).send({message:`Successfly delete post with post Id ${postId}`})
		}
	},
	updatePost(req,res){
		const postId=req.params.postId
		if(req.params.postId> store.posts.length)
		{
			res.status(400).send({message:`No Post Record found with post Id ${postId}`})
		}else{
			store.posts.splice(req.params.postId,1,req.body)
			res.status(200).send({message:`Successfly updated post with post Id ${postId}`})
		}
	}
}