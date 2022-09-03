const List = require('../models/Lists')
const Todo = require('../models/Todo')

module.exports = {
	getLists: async (req, res) => {
		try {
			const listItems = await List.find({ userId: req.user.id })
			const itemsLeft = await List.countDocuments({
				userid: req.user.id,
				completed: false,
			})
			res.render('lists.ejs', {
				lists: listItems,
				left: itemsLeft,
				user: req.user,
			})
		} catch (err) {
			console.log(err)
		}
	},

	// getList: async (req, res) => {
	// 	console.log(req.listName)
	// 	try {
	// 		const todoItems = await Todo.find({ userId: req.user.id })
	// 		const itemsLeft = await Todo.countDocuments({
	// 			userId: req.user.id,
	// 			completed: false,
	// 		})
	// 		res.render('sharedList.ejs', {
	// 			todos: todoItems,
	// 			left: itemsLeft,
	// 			user: req.user,
	// 		})
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// },

	createList: async (req, res) => {
		try {
			const newList = await List.create({
				listName: req.body.listName,
				userId: req.user.id,
				groupId: req.body.groupId,
			})
			console.log('List has been added!')
			res.redirect('/lists')
		} catch (err) {
			console.log(err)
		}
	},
	// markComplete: async (req, res) => {
	// 	try {
	// 		await List.findOneAndUpdate(
	// 			{ _id: req.body.listIdFromJSFile },
	// 			{
	// 				completed: true,
	// 			}
	// 		)
	// 		console.log('Marked Complete')
	// 		res.json('Marked Complete')
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// },
	// markIncomplete: async (req, res) => {
	// 	try {
	// 		await List.findOneAndUpdate(
	// 			{ _id: req.body.listIdFromJSFile },
	// 			{
	// 				completed: false,
	// 			}
	// 		)
	// 		console.log('Marked Incomplete')
	// 		res.json('Marked Incomplete')
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// },
	deleteList: async (req, res) => {
		console.log(req.body.listIdFromJSFile)
		try {
			await List.findOneAndDelete({ _id: req.body.listIdFromJSFile })
			console.log('Deleted List')
			res.json('Deleted It')
		} catch (err) {
			console.log(err)
		}
	},
}
