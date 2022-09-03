const express = require('express')
const router = express.Router()
const listsController = require('../controllers/lists')
const sharedListController = require('../controllers/sharedLists')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, listsController.getLists)

router.get('/:id', sharedListController.getList)

router.post('/createList', listsController.createList)

router.delete('/deleteList', listsController.deleteList)

module.exports = router
