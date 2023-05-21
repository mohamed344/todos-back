const router = require('express').Router();



/* GET Todo Tasks page. */
router.get('/',  (req, res) => {
  const tasks = Task.find({}).then(() => {
    if(error){
      console.log(error);
      }else{
        res.json(tasks)
    }
  })
});
    

/* create Todo Task . */
router.post('/create', async (req, res) => {
  try{
    const {title} = req.body;
    const newTask = await Task({task: title}).save()
    res.json(newTask)
  }catch(error){
    res.status(500).json(error)
  }
});

module.exports = router;
