console.clear();
const express = require('express');
require('dotenv').config();
require('colors');
const connectDB = require('./config/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const Img = require('./models/imgModel');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(
  fileUpload({
    limits: {
      fileSize: 10000000,
    },
    abortOnLimit: true,
  })
);
app.use(express.json());
app.use(cors());
connectDB.connectDb();

app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/public/favicon.ico');
});
app.use('/api/img', require('./routes/imgRoutes'));
app.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // if (req.params._id === 'favicon.ico') {
    //   return res.status(404);
    // }
    const time = await Date.now();
    const data = await Img.findById(req.params.id);
    const dir = (await __dirname) + '/temp/' + time + '/' + time + '.png';
    if (!fs.existsSync(__dirname + '/temp')) {
      fs.mkdirSync(__dirname + '/temp/');
    }
    fs.mkdirSync(path.resolve(__dirname + '/temp/' + time));
    const base64Data = data.imgFile.replace(/^data:([A-Za-z-+/]+);base64,/, '');

    fs.writeFileSync(dir, base64Data, { encoding: 'base64' });
    res.sendFile(dir);
    // fs.rmSync(dir, { recursive: true, force: true });
  })
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });
}

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`.bold.dim)
);
