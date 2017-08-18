const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5996c66459dfa06442bf73a11';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// };
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '599054688d57c178340d7d2b';

User.findById(userId).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log(user);
}).catch((e) => console.log(e));