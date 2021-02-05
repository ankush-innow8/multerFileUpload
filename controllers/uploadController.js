import path from 'path'
//Check File Type
function checkFileType(file, callback) {
    // allow extensions
    const fileTypes = /jpeg|jpg|png|gif/
    //check ext
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
    //check mime
    const mimetype = fileTypes.test(file.mimetype)

    if (mimetype && extname) {
        return callback(null,true)
    } else {
        callback('Error: Images only!')
    }
}

export default checkFileType