const mongoose  = require('mongoose')
mongoose.connect('mongodb+srv://ppranavvvvv918:GQgevmBgXsGBWpGd@cluster0.ig1ix5w.mongodb.net/SocialMediaApp')

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
