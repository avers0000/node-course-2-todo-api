// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('597fa5bff847b57161c1521e')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(JSON.stringify(result, undefined, 4));
	// });

	db.collection('Users').findOneAndUpdate({
		name: 'Jen'
	}, {
		$set: {
			name: 'Alexey'
		},
		$inc: { age: 1}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 4));
	});
	// db.close();
});