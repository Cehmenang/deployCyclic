const Router = require('./router.js')
const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()

const app = express()

const connectDB = async()=>{
       try{
              await mongoose.set({ 'strictQuery': false })
              const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
              console.log(`MongoDB Connected ${conn.connection.host}`)
       }catch(err){ 
              console.error(err)
              process.exit(1)
       }
}

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(Router)

connectDB().then(()=>{
       app.listen(process.env.PORT || 8000, ()=>console.info(`Server and Database are Connected at http://localhost:${process.env.PORT}`))
})


