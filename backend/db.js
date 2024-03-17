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
    image: String,
    id: String
})

const commentSchema = mongoose.Schema({
    id: String,
    comment: String,
    username: String,
    name: String,
    profilePic: String
})

const userModel = mongoose.model('signupData',userSchema)
const messageModel = mongoose.model('messageData',messageSchema)
const commentModel = mongoose.model('commentData',commentSchema)

module.exports = {
    userModel,
    messageModel,
    commentModel
}