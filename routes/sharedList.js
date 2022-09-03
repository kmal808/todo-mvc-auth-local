const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const sharedListsController = require('../controllers/sharedLists')

router.get('/', sharedListsController.getSharedList)
router.get('/:id', sharedListsController.getList)
router.post('/createSharedTodo', sharedListsController.createSharedTodo)

module.exports = router
