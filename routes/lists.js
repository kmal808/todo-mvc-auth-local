const express = require('express')
const router = express.Router()
const listsController = require('../controllers/lists')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, listsController.getLists)

// router.get('/:id', ensureAuth, todosController.getTodos)

router.post('/createList', listsController.createList)

router.delete('/deleteList', listsController.deleteList)

// router.put('/markComplete', listsController.markComplete)

// router.put('/markIncomplete', listsController.markIncomplete)

module.exports = router
