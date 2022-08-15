const cors = require('cors')
require('dotenv').config()
const express = require('express')
const app = express()


app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use(cors())


const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name:'image-wallpapers',
    api_key:'843156131545263',
    api_secret:'s91Jg8k4sEziG6y2HzpxMSWPovA'
})

app.post('/api/upload', async (req,res) => {
    try {
        const filestr = req.body.data
        const uploadedResponse = await cloudinary.uploader.upload(filestr,{upload_preset:'images'})
        console.log(uploadedResponse)
        res.json({message:'uploaded'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'not uploaded'})

    }
})


app.listen( 5000 , () => console.log("listening on port 5000"))