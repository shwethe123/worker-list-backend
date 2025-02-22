// const multer = require("multer");
// const path = require("path");

// Set up storage for uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save files in the "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname); // Get file extension
//     cb(null, file.fieldname + "-" + uniqueSuffix + ext); // Unique filename
//   },
// });
// module.exports = upload;

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads")); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Unique filename
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
