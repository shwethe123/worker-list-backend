const express = require('express');
const Worker_controller = require('../Controller/WorkerList/Worker_list');
const upload = require("../middleware/multer");

const router = express.Router();

router.get('/worker_list', Worker_controller.index);
router.post('/worker_list', upload.single("image"), Worker_controller.store);
router.get('/worker_list/:id', Worker_controller.show);
router.patch('/worker_list/:id', Worker_controller.update);
router.delete('/worker_list/:id', Worker_controller.destroy);
// router.post("/worker_list", upload.single("image"), Worker_controller.store);

module.exports = router;