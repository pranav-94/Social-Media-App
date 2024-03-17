const express = require('express')
const validateData = require('../zod')
const db = require('../db')
const multer = require('multer')
const jwtSec = require('../secret')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/signUp',async(req,res)=>{
    const signupData = req.body 
    

    //data vaildation
    const valRes = validateData.user.safeParse(signupData)
    if(valRes.success === false){
         res.json({
            msg: 'invalid inputs'
        })
        return
    }

    //mongoose part
     const checkDuplicate = await db.userModel.findOne({
        username: req.body.username,
        email: req.body.email
    })
    if(checkDuplicate){
        return res.json({
            msg: 'username already exists'
        })
    }

    const userData = await db.userModel.create({
        username: req.body.username,
        password: req.body.password ,
        email: req.body.email
    })

    res.json({
        msg: 'success',
        data: userData
    })


})

router.put('/onBoarding',async(req,res)=>{
    const username = req.query.username 

    const getUser = await db.userModel.updateOne({
        username: username
    },
    {
        name: req.body.name,
        bio: req.body.bio,
        username: req.body.username,
        profilePic: req.body.profilePic
    })

    res.send(getUser)
})

//for signing in user
router.post('/signIn',async(req,res)=>{
    const signInData = req.body 

    const verifySign = await db.userModel.findOne({
        email: signInData.email,
        password: signInData.password
    })
    if(!verifySign){
        res.status(403).json({
            msg: `check information`
        })
    }

    res.status(200).json({
        msg: 'sign in successful',
        user: verifySign
    })
})

router.post('/post',(req,res)=>{
    const message = req.body.message 
    
    

})

//for main user's profile gonna fucked up
router.get('/AlluserProfile',async(req,res)=>{
    const name = req.query.name
    // console.log(name)

    const findUserFromDb = await db.userModel.findOne({
        name: name
    })
    if(!findUserFromDb){
        return res.status(403).json({
            msg: 'access denied'
        })
    }

    const findMessages = await db.messageModel.find({
        name:findUserFromDb.name
    })

    res.status(200).json({
        msg: 'success',
        data: findUserFromDb,
        messageData: findMessages
})
})

router.get('/userProfile',async(req,res)=>{
    const username = req.query.username 
    console.log(username)

    const findUserFromDb = await db.userModel.findOne({
        username: username
    })
    if(!findUserFromDb){
        return res.status(403).json({
            msg: 'access denied'
        })
    }

    const findMessages = await db.messageModel.find({
        username:findUserFromDb.username
    })

    res.status(200).json({
        msg: 'success',
        data: findUserFromDb,
        messageData: findMessages
})
})

//to post message on app
router.post('/sendMessage',async (req,res)=>{
    const messageData = req.body 

    const findUser = await db.userModel.findOne({
        username: messageData.username
    })
    if(!findUser){
        return res.status(403).json({
            msg: 'user not found'
        })
    }

    const uploadMessage = await db.messageModel.create({
        username: findUser.username,
        name: messageData.name,
        message: messageData.message,
        image: messageData.image,
        id: findUser._id
    })

    res.status(200).json({
        msg: 'success',
        data: uploadMessage
    })

})

//to get main user's activity
router.get('/userActivity',async(req,res)=>{

    const userActivity = await db.messageModel.find({
        userId: req.body.userId
    })
    if(userActivity.length === 0){
        res.status(403).json({
            msg: 'user not found'
        })
    }
    res.status(200).json({
        msg: 'success',
        data: userActivity
    })

})

//to search other users
router.get('/allUsers',async(req,res)=>{

    const Allusers = await db.userModel.find()

    res.status(200).json({
        msg: 'success',
        data: Allusers
    })
})

router.get('/suggestedUsers',async(req,res)=>{

    const Allusers = await db.userModel.find().sort({ _id: 1 }).limit(3)

    res.status(200).json({
        msg: 'success',
        data: Allusers
    })
})

router.get('/retriveMessages',async(req,res)=>{

    const messages =await db.messageModel.find()

    res.status(200).json({
        msg: 'success',
        data: messages
    })

})

router.put('/editProfile',async(req,res)=>{
    const username = req.query.username 

    const userData = {
        name: req.body.name,
        bio: req.body.bio,
        username: req.body.username,
        profilePic: req.body.profilePic
    }

    const getUser = await db.userModel.updateOne({
        username: username
    },
    {
        name: userData.name,
        bio: req.body.bio,
        username: req.body.username,
        profilePic: req.body.profilePic
    })

    res.status(200).json({
        msg:'success',
        userData: userData
    })
})

router.delete('/deleteUser',async(req,res)=>{
    const username = req.query.username 

     const dUserInfo = await db.userModel.deleteOne({
        username: username
     })

     const dPostInfo = await db.messageModel.deleteMany({
        username : username
     })

     res.status(200).json({
        msg: 'success',
        userInfo: dUserInfo,
        messageInfo: dPostInfo
     })

})

router.post('/comments',async(req,res)=>{
      
    const userData = req.body 

    const findMessage =await db.messageModel.findOne({
        _id: userData.id
    })

    const userMsg = await db.userModel.findOne({
        username: userData.username
    })
    console.log(userMsg)

    if(!findMessage){
        res.status(403).json({
            msg: 'message not found'
        })
        return
    }

    const createComment =await db.commentModel.create({
        id: findMessage._id,
        comment: userData.comment,
        username: userMsg.username,
        name: userMsg.name,
        profilePic: userMsg.profilePic
    })

    res.status(200).json({
        msg:'success',
        data: createComment
    })
})

router.get('/retriveComments',async(req,res)=>{
     const id = req.query.id 

     const comments =await db.commentModel.find({
        id: id
     })

    //  if(comments.length === 0){
    //     res.json({
    //         msg: 'no comments'
    //     })
    //  }

     res.status(200).json({
        msg: 'success',
        data: comments
     })
})

// router.post('/likeCount',(req,res)=>{
//     const likeState = req.query.like

//     if(likeState === true){
       
//     }
// })


module.exports = router