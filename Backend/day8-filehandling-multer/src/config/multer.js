const multer = require("multer");
//multer has two thing diskstorage and memorystorage
//diskstorage is local way of file stroage through multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // cb(error,destination)
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

//memory storage for server
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
