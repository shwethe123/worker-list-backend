const express = require('express');
const Worker_controller = require('../Controller/WorkerSet/WrokerSet');
const {upload} = require('../config/worker_set');

const router = express();

router.get('/worker_set', Worker_controller.index);

router.post('/worker_set',upload.single('profile'), Worker_controller.store);

router.get('/worker_set/:id', Worker_controller.show);

router.patch('/worker_set/:id', Worker_controller.update);

router.delete('/worker_set/:id', Worker_controller.destroy);

module.exports = router;