const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

const db = client.db('Users');
db.collection('user').deleteOne({username:'delete'}).then((result)=>{
    console.log(result.result);
});
db.collection('user').deleteMany({username:'Tsiyon'}).then((result)=>{
    console.log(result.result);
})
  
  client.close();
});