const router = require('express').Router();
const TasksController = require('../controllers/tasksController')
const auth = require('../middlewares/auth')

// GET Todo Tasks page.
router.get('/', auth, TasksController.getAllTasks);
router.get('/tasks/:username', auth, TasksController.getTasks)
// create Todo Task .
router.post('/create',auth, TasksController.createTask);

// show Task .
router.get('/show/:id',auth, TasksController.showTask);

// edit Task .
router.patch('/edit/:id',auth, TasksController.editTask);

// update Task .
router.put('/update/:id',auth, TasksController.updateTask);

// delete Task .
router.delete('/delete/:id',auth, TasksController.deleteTask);

module.exports = router;
