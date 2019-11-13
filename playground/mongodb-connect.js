const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
// 	const db = client.db('Todos');
//  	db.collection('Todos').insertOne({
//     	text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }

const db = client.db('Users');
// db.collection('user').insertOne({
// 	username: 'Tsiyon',
// 	age:323,
// 	location: 'Addis Ababa'
// },(err,result)=>{
// 	if(err){
// 		return console.log("Unable to insert ",err);
// 	}
// console.log(result.ops )
// 	})
db.collection('user').find({age:32}).toArray().then(
	(docs)=>{
console.log("users");
console.log(JSON.stringify(docs,undefined,2))
	},(err)=>{
		console.log("error occured");
	}
)
  
  
  client.close();
});