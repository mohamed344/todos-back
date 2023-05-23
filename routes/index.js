const router = require('express').Router();
const TasksController = require('../controllers/tasksController')


// GET Todo Tasks page. 
router.get('/', TasksController.index);
    

// create Todo Task . 
router.post('/create', TasksController.create);

// show Task . 
router.get('/show/:id', TasksController.show);

// edit Task . 
router.get('/edit/:id', TasksController.edit);

// update Task .
router.put('/update/:id', TasksController.update);

// delete Task .
router.delete('/delete/:id', TasksController.delete);

module.exports = router;
