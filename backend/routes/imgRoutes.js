const express = require('express');
const imgController = require('../controllers/imgController');

const router = express.Router();

router.route('/').get(imgController.getAllImgs).post(imgController.postImg);
// router.post('/'), upload.single('file', imgController.postImg);
router.route('/:id').delete(imgController.deleteImg);

module.exports = router;
