
echo 'Testing Accounts API'

echo 'Deleting ravi Account'

curl -i -X DELETE localhost:3001/accounts/ravi

sleep 2

echo 'Saving record'

curl -i -H "Content-Type":"application/json" -X POST -d '{"name":"ravi","phone":"Not Applicable","balance":10000}' localhost:3001/accounts

sleep 2
echo 'Getting Accounts'

curl -i localhost:3001/accounts

sleep 2
echo 'Updating Account with Name ravi'

curl -i -H "Content-Type":"application/json" -X PUT -d '{"name":"ravi","phone":"Not Applicable","balance":20000}' localhost:3001/accounts/ravi


sleep 2
echo 'Getting ravi Account'

curl -i localhost:3001/accounts/ravi


sleep 2
echo 'Deleting ravi Account'

curl -i -X DELETE localhost:3001/accounts/ravi

sleep 10
