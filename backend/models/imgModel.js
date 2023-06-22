const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema(
  {
    imgFile: {
      // data: Buffer,
      type: String,
      // contentType: String,
      required: [true, 'Please add a Img url'],
    },
    imgCaption: {
      type: String,
      required: [true, 'Please add a Img caption'],
    },
    color: {
      type: String,
      required: [true, 'Please add a Backround Color'],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Img', imgSchema);
