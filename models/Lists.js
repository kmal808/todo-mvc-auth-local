const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
	listName: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	listId: {
		type: String,
	},
})

module.exports = mongoose.model('List', ListSchema)
