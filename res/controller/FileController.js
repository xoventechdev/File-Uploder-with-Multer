const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, path.resolve(__dirname,'..','upload'))
    },
    filename : function (req, file, cb){
        cb(null, file.originalname)
    }
});

const fileUpload = multer({storage: storage});

exports.FileUploder =(req, res)=>{

    fileUpload.single("image")(req, res, function (err){
        if(err){
            res.end(err)
        }
        else{
            res.end('File Uploaded Success')
        }
    });
}