const express = require('express')

const router = express.Router();

const {createTodo}  = require('../controller/createData')

const {updateTodo}  = require('../controller/createData')

const {getTodo}  = require('../controller/getTodo')

const {getTodoById}  = require('../controller/getTodo')

const {deleteById}  = require('../controller/delete')

// create 
router.post('/createTodo', createTodo);

// get all
router.get('/getTodo', getTodo);

// get by id
router.get('/getTodo/:id', getTodoById);

// update
router.put('/updateTodo/:id', updateTodo);

// delete 
router.delete('/deleteTodo/:id', deleteById);

// export router 
module.exports = router;