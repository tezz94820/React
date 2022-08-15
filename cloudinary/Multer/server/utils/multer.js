const multer = require('multer')
const path = require('path')

module.exports = multer({
    storage:multer.diskStorage({}),
    fileFilter:(req,file,cb)=>{
        let ext = path.extname(file.originalname)
        if(ext!='.jpg' && ext!='.jpeg' && ext!='.png'){
            cb(new Error('File type is not supported') , false)  //first argument is the error and the next argument is the boolean to say to pass on the file or not
            return ;
        }
        cb(null,true)   //return the file for  no error
    }
})