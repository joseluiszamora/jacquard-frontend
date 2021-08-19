const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const { v4: uuidv4 } = require('uuid');
const mime = require('mime');
const path = require('path')
const User = require('../models').user;


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/users");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}.${mime.getExtension(file.mimetype)}`)
  }
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Solo se permiten imágenes'))
        }
        callback(null, true)
    },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;

