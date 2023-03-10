import connectDatabase from './database.js'
import Router from './router.js'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

class App {
       constructor(){
              this.app = express()
              this.middleware()
              this.connection()
       }
       middleware(){
              this.app.use(express.urlencoded({extended: true}))
              this.app.use(express.json())
              this.app.use(Router)
       }
       async connection(){
              await connectDatabase()
              this.app.listen(process.env.PORT, ()=>console.info(`Server and Database are Connected at http://localhost:${process.env.PORT}`))
                     
       }
}

const app = new App().app