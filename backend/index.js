const express = require('express')
const app = express()
const userRouter = require('./routes/index')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/api/v1',userRouter)

app.get('/',(req,res)=>{
    res.send("hello wrodl")
})

app.listen(3000)