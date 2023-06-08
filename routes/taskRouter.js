const router = require('express').Router();
const TasksController = require('../controllers/tasksController')
const auth = require('../middlewares/auth')

// GET Todo Tasks page.
router.get('/', TasksController.getTasks);

// create Todo Task .
router.post('/create', TasksController.createTask);

// edit Task .
router.put('/edit/:id', TasksController.editTask);

// update Task .
router.put('/update/:id', TasksController.updateTask);

// delete Task .
router.delete('/delete/:id', TasksController.deleteTask);

module.exports = router;
