require("dotenv").config();
const fileName = 'multerS3.js'
const multer = require("multer");
const multerS3 = require("multer-s3");
const { s3 } = require("../../config/aws.config");

const fileFilter = (req, files, cb) => {
    try {
        if (files.mimetype === 'video/mp4' || 
            files.mimetype === 'application/pdf' || 
            files.mimetype === 'application/octet-stream' || 
            files.mimetype === 'image/x-png' ||
            files.mimetype === 'image/jpeg' ||
            files.mimetype === 'image/webp' ||
            files.mimetype === 'image/gif' ||
            files.mimetype === 'image/svg+xml'
            ) {
        cb(null, true);
        } else {
        cb(new Error('Invalid file type. Only MP4 and PDF files are allowed.'), false);
        }
    } catch(e) {
        cb(new Error(`Error in ${fileName} - > ${e}`), false);
    }
}

const upload = multer({
    storage : multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
        cb(null, Date.now().toString() + '-' + file.originalname);
        }
    }),
    fileFilter: fileFilter
});

module.exports.upload = upload.array('files', process.env.FILE_UPLOAD_LIMIT || 10);

module.exports.uploadSingle = upload.single('file');