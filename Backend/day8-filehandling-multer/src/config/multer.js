const multer = require("multer");

//diskstorage is local way of file stroage through multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(error,destination)
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log("In filename", file);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
