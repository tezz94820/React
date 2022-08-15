const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name:'image-wallpapers',
    api_key:'843156131545263',
    api_secret:'s91Jg8k4sEziG6y2HzpxMSWPovA'
})

module.exports = cloudinary