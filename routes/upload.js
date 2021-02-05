import { Router } from "express";
import upload from '../middlewares/multerUpload.js'

const router = Router()

router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err,
            })
        } else {
            if (req.files.length == 0) {
                console.log("Im in if")
                res.redirect('/api')
            } else {
                console.log(req.files)
                res.render('index', {
                    msg: 'File Uploaded!',
                    files: req.files        
            })
            }
        }
    })
})

export default router

