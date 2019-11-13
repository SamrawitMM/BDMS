const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

const db = client.db('Todos');
db.collection('todos').findOneAndUpdate(
{_id: new ObjectID("5c1f0da073b651e22b8b2aba")},
{
  $set:{
    completed:true
  }
},{
  returnOriginal:false
}

).then((result)=>{
  console.log(result);
})
  
  client.close();
});