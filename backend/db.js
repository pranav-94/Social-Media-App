const mongoose  = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/SocialMediaApp')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    bio: String,
    profilePic: String
})

const messageSchema = mongoose.Schema({
    username: String,
    message: String,
    name: String,
    image: String
})

const userModel = mongoose.model('signupData',userSchema)
const messageModel = mongoose.model('messageData',messageSchema)

module.exports = {
    userModel,
    messageModel
}