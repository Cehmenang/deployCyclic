import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export default async function connectDatabase(){
       try{
              await mongoose.set({ 'strictQuery': false })
              await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
       } catch(err){ console.error(err) }
}