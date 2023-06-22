const Img = require('../models/imgModel');
const asyncHandler = require('express-async-handler');
const getAllImgs = asyncHandler(async (req, res) => {
  res.json(await Img.find());
});

const postImg = asyncHandler(async (req, res) => {
  if (req.files) {
    if (
      req.files.file.mimetype == 'image/png' ||
      req.files.file.mimetype == 'image/jpeg' ||
      req.files.file.mimetype == 'image/jpg' ||
      req.files.file.mimetype == 'image/gif'
    ) {
      if (!req.body.caption) {
        res.status(400).json({ message: 'Caption not found' });
      } else {
        if (req.files.file.size < 10000000) {
          const img = await {
            imgFile: req.files.file.data.toString('base64'),
            imgCaption: req.body.caption,
            color: req.body.color,
          };

          Img.create(img);
          res.redirect(`/`);
        } else {
          res.status(400).json({ message: 'File to large' });
        }
      }
    } else {
      res.status(400).json({ message: 'Invalid file type' });
    }
  } else {
    res.status(400).json({ message: 'Image not found' });
  }
});
const deleteImg = asyncHandler(async (req, res) => {
  deletedImg = await Img.findById(req.params.id);
  if (!deletedImg) {
    res.status(400).json({ message: 'Img not found' });
  } else {
    await Img.deleteOne(deletedImg);
  }
  res.json(deletedImg);
});

module.exports = {
  getAllImgs,
  postImg,
  deleteImg,
};
