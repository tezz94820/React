const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user')

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use('/user',userRouter)


app.listen(5000, async ()=> {
    try {
        await mongoose.connect('mongodb+srv://Tejas:1234@nodeprojects.1ardogp.mongodb.net/clouds?retryWrites=true&w=majority')
        console.log('server is lesitening on port 5000')
    } catch (error) {
        console.error(error.message)
    }
})