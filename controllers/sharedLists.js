const List = require('../models/Lists')
const Todo = require('../models/Todo')
const SharedTodo = require('../models/SharedTodo')

module.exports = {
	getSharedList: async (req, res) => {
		try {
			const sharedList = await List.findById(req.params._id)
			const sharedTodoItems = await Todo.find({ listId: req.params.id })
			const sharedListItems = await List.find({ userId: req.user.id })
			const list = await List.findById(req.params.id)
			const itemsLeft = await Todo.countDocuments({
				listId: req.params.id,
				completed: false,
			})
			res.render('sharedList.ejs', {
				user: req.user,
				listName: sharedList.name,
				todos: sharedTodoItems,
				listId: sharedList,
				left: itemsLeft,
				lists: sharedList,
			})
		} catch (err) {}
	},

	getList: async (req, res) => {
		console.log(req.listName)
		try {
			const sharedList = await List.findById(req.params.id)
			const todoItems = await Todo.find({ userId: req.user.id })
			const itemsLeft = await Todo.countDocuments({
				userId: req.user.id,
				completed: false,
			})
			res.render('sharedList.ejs', {
				todos: todoItems,
				left: itemsLeft,
				listId: sharedList,
				user: req.user,
			})
		} catch (err) {
			console.log(err)
		}
	},

	createSharedTodo: async (req, res) => {
		try {
			await SharedTodo.create({
				sharedTodo: req.body.sharedTodo,
				completed: false,
				userId: req.user.id,
			})
			console.log('Todo has been added!')
			res.redirect('/listName')
		} catch (err) {
			console.log(err)
		}
	},
}
