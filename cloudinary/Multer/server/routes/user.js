const router = require('express').Router()
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')
const User = require('../models/user')

router.post('/', upload.single('image') , async (req,res) => {          //image is the name of the file while uploading it n the frontend
try {
    const result = await cloudinary.uploader.upload(req.file.path)
    //create instance of user
    const user = await User.create({name:req.body.name,avatar:result.secure_url,cloudinary_id:result.public_id})
    res.json(user)
} catch (error) {
    console.error(error.message)
}
})


router.get('/', async (req,res) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:error.message})        
    }
})

router.delete('/:id',async (req,res) => {
    try {
    //find user by id
    const user = await User.findById(req.params.id)
    //delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id)
    //delete user from database
    await User.deleteOne({_id:user._id})
    res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})    
    }
})


router.patch('/:id',upload.single('image'),async (req,res) => {
    try {
            const user = await User.findById(req.params.id)
            await cloudinary.uploader.destroy(user.cloudinary_id)
            const result = await cloudinary.uploader.upload(req.file.path)
        
        data = {
            name:req.body.name || user.name,
            avatar: result.secure_url ||user.avatar ,
            cloudinary_id:result.public_id || user.cloudinary_id
        }
        const newUser = await User.findByIdAndUpdate(req.params.id,data,{new:true})
        result.json(newUser)
    } catch (error) {
        res.json({error:error.message})
    }
})

module.exports = router