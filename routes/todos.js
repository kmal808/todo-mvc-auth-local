const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const listsController = require('../controllers/lists')
const sharedListController = require('../controllers/sharedLists')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.get('/:id', sharedListController.getList)

router.post('/createTodo', todosController.createTodo)

router.post('/createList', listsController.createList)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router
