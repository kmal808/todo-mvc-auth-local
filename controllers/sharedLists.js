const List = require('../models/Lists')
const Todo = require('../models/Todo')
const SharedTodo = require('../models/SharedTodo')

module.exports = {
	getList: async (req, res) => {
		try {
			const sharedList = await List.findById(req.params.id)
			const sharedTodoItems = await Todo.find({ listId: req.params.id })
			const sharedListItems = await List.find({ userId: req.user.id })
			const itemsLeft = await Todo.countDocuments({
				listId: req.params.id,
				completed: false,
			})
			res.render('sharedList.ejs', {
				user: req.user,
				listName: sharedList.name,
				groupId: sharedList.name,
				sharedTodos: sharedTodoItems,
				left: itemsLeft,
				lists: sharedListItems,
			})
		} catch (err) {}
	},

	createSharedTodo: async (req, res) => {
		try {
			await SharedTodo.create({
				sharedTodo: req.body.sharedTodo,
				completed: false,
				userId: req.user.id,
			})
			console.log('Todo has been added!')
			res.redirect('/:id')
		} catch (err) {
			console.log(err)
		}
	},
}
