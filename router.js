const express = require('express')
const Book = require('./model.js')

class Route {
       constructor(){
              this.router = express.Router()
              this.routes()
       }
       routes(){
              this.router.get('/', (req,res)=>{
                     return res.status(200).json({msg:`Halo Dunia!`})
              })
              this.router.get('/getBooks', async(req,res)=>{
                     try{
                            const books = await Book.find({})
                            return res.status(200).json(books)
                     }catch(err){ return res.status(400).json(err) }
              })
              this.router.get('/addBook', async(req,res)=>{
                     try{
                            let book
                            if(req.query.title && req.query.author){
                                   try{
                                          book = new Book(req.query)
                                          await book.save()
                                          return res.status(200).json({msg: `1 Data berhasil ditambahkan!`})
                                   }catch(err){ return res.status(400).json(err) }
                            }
                            book = await Book.find({})
                            return res.status(200).json(book)
                     }catch(err){ return res.status(400).json(err) }
              })
       }
}

export default new Route().router