const router = require('express').Router();
const TasksController = require('../controllers/tasksController')
const auth = require('../middlewares/auth')

// GET Todo Tasks page.
router.get('/', auth, TasksController.getTasks);

// create Todo Task .
router.post('/create',auth,  TasksController.createTask);

// edit Task .
router.get('/show/:id', TasksController.showTask);
router.put('/edit/:id', TasksController.editTask);

// update Task .
router.put('/update/:id', TasksController.updateTask);

// delete Task .
router.delete('/delete/:id', TasksController.deleteTask);

module.exports = router;
