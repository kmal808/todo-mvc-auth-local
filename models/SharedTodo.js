const mongoose = require('mongoose')

const SharedTodoSchema = new mongoose.Schema({
	sharedTodo: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
	},
	listId: {
		type: String,
	},
})

module.exports = mongoose.model('SharedTodo', SharedTodoSchema)
