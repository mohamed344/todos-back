const router = require('express').Router();
const TasksController = require('../controllers/tasksController')
const auth = require('../middlewares/auth')

// GET Todo Tasks page.
router.get('/', auth, TasksController.getTasks);

// create Todo Task .
router.post('/create',auth,  TasksController.createTask);

// edit Task .
router.put('/edit/:id',auth, TasksController.editTask);

// update Task .
router.put('/update/:id',auth, TasksController.updateTask);

// delete Task .
router.delete('/delete/:id',auth, TasksController.deleteTask);

module.exports = router;
