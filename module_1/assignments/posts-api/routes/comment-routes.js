const {store} =  require('../data/store.js')

module.exports= {
	getComments(req,res){
		const postId=req.params.postId;
		if(!store.posts[postId])
		{
			res.status(400).send({message:`No Post Record found with post Id ${postId}`})
		}else{
			res.status(200).send(store.posts[postId].comments)
		}
		
	},
	saveComment(req,res){
		const postId=req.params.postId;
		if(!store.posts[postId])
		{
			res.status(400).send({message:`No Post Record found with post Id ${postId}`})
		}else{
		const commentId=store.posts[postId].comments.length;
		store.posts[postId].comments.push(req.body)
		res.status(200).send({'commentId':commentId})
		}
		
	},
	deleteComment(req,res){
		
		const postId=req.params.postId;
		if(!store.posts[postId])
		{
			res.status(400).send({message:`No Post Record found with post Id ${postId}`})
		}else{
			const commentId=req.params.commentId;
			if(!store.posts[postId].comments[commentId])
			{
				res.status(400).send({message:`No Comment Record found with comment ${commentId}`})
			}else{
				store.posts[postId].comments.splice(commentId,1)
				console.log(store.posts.length)
				res.status(200).send({message:`Successfly delete comment with Id ${commentId}`})
			}
		}
	},
	updateComment(req,res){
		const postId=req.params.postId;
		if(!store.posts[postId])
		{
			res.status(400).send({message:`No Post Record found with post Id ${postId}`})
		}else{
			const commentId=req.params.commentId;
			if(!store.posts[postId].comments[commentId])
			{
				res.status(400).send({message:`No Comment Record found with comment ${commentId}`})
			}else{
				store.posts[postId].comments.splice(commentId,1,req.body)
				res.status(200).send({message:`Successfly update comment with Id ${commentId}`})
			}
		}
	}
}