const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },

  filename: (req, file, callback) => {
    let type = "file";

    if (file.mimetype.startsWith("image/")) {
      type = "image";
    } else if (file.mimetype === "application/pdf") {
      type = "pdf";
    }

    const ext = path.extname(file.originalname);
    const safeName = file.originalname
      .replace(ext, "")
      .replace(/[^a-zA-Z0-9-_]/g, "");

    callback(
      null,
      `Report-${type}-${Date.now()}-${safeName}${ext}`
    );
  }
  });

const fileFilter = (req, file, callback) => {
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp",
        "application/pdf"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(
            new Error("Only JPG, PNG, WEBP images and PDF files are allowed"),
            false
        );
    }
};

const multerMiddleware = multer({
    storage, fileFilter
})

module.exports = multerMiddleware;