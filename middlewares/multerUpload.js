import multer from 'multer';
import ejs from 'ejs'; 
import path from 'path'
import checkFileType from '../controllers/uploadController.js'

//set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

//Init upload  
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback);
    }
}).array('myImage', 2)

export default upload