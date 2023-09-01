const express = require('express');
const router = express.Router();  
const multer = require('multer');
const randomstring = require("randomstring");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    // Dapatkan ekstensi file yang diunggah
    const fileExtension = file.originalname.split('.').pop();

    const randomNum = randomstring.generate();  ;

    // Gabungkan angka acak dengan ekstensi file asli
    const newFileName = `${randomNum}.${fileExtension}`;

    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

const homeController = require('../app/controllers/homeController');

router.get('/',homeController.index);
router.post('/',upload.single('image'),homeController.post);

module.exports = router;