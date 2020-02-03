
echo "Executing Blogs API"

sleep 1

echo "Executing GET /posts"

curl localhost:3001/posts

sleep 1

echo "delete /posts/0"

curl -X DELETE localhost:3001/posts/0

sleep 1

echo "creating post /posts"

curl -H "Content-Type":"application/json" -X POST -d '{"name":"Top 10 ES6 Features every Web Developer must know","url":"https://webapplog.com/es6","text":"This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.","comments":[{"text":"hello"}]}' localhost:3001/posts

sleep 1

echo "updating post /posts/0"

curl -H "Content-Type":"application/json" -X PUT -d '{"name":"Top 10 ES6 Features every Web Developer must know","url":"https://webapplog.com/es6","text":"This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.","comments":[{"text":"updated hello"}]}' localhost:3001/posts/0

sleep 1

echo "Querying Comments for post 0"

curl localhost:3001/posts/0/comments

sleep 1

echo "Deleting first Comment for post 0"

curl  -X DELETE localhost:3001/posts/0/comments/0

sleep 1

echo "creating comment for post 0 /posts/0/comments"

curl -H "Content-Type":"application/json" -X POST -d '{"text":"new comment"}' localhost:3001/posts/0/comments

sleep 2

echo "updating comment for post 0 /posts/0/comments"

curl -H "Content-Type":"application/json" -X PUT -d '{"text":"updated comment"}' localhost:3001/posts/0/comments/0

sleep 2

echo "Executing GET /posts"

curl localhost:3001/posts

sleep 5

