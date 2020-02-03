const express = require('express')
const bodyParser = require('body-parser')
const errorHandler=require('errorhandler')
const logger =require('morgan')

const posts    =    require('./routes/post-routes.js')
const comments =    require('./routes/comment-routes.js')

const app=express()

app.use(bodyParser.json())
app.use(errorHandler())
app.use(logger('dev'))

app.get("/",(req,res)=>{
	res.status(200).send({'message':'Welcome to blog API'})
})
app.get('/posts',posts.getPosts)

app.post('/posts',posts.savePost)

app.delete('/posts/:postId',posts.deletePost)

app.put('/posts/:postId',posts.updatePost)

app.get('/posts/:postId/comments',comments.getComments)

app.post('/posts/:postId/comments',comments.saveComment)

app.put('/posts/:postId/comments/:commentId',comments.updateComment)

app.delete('/posts/:postId/comments/:commentId',comments.deleteComment)



app.listen(3001,()=> {
	console.log('Blog api started !!!')
})