const express = require('express')
const { getDb, connectToDb } = require('./db')
const { ObjectId } = require('mongodb')

// init app & middleware
const app = express()
app.use(express.json())
// db connection
let db

connectToDb((err) => {
  if(!err){
    app.listen('3000', () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

// routes
app.get('/books', (req, res) => {
  let books = []

  const page=req.query.p ||0
  const bookSkipPage=3

  db.collection('books')
    .find()
    .sort({author: 1})
    .skip(bookSkipPage*page)
    .limit(bookSkipPage)
    .forEach(book => books.push(book))
    .then(() => {
      res.status(200).json(books)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})

app.get('/books/:id',(req,res)=>{
  if(ObjectId.isValid(req.params.id)){

    db.collection('books').findOne({_id:new ObjectId(req.params.id)})
    .then(doc=>{
      res.status(200).json(doc)
    }).catch(err=>{
      res.status(500).json({error:"Data retrive  is fail "})
    });
  }else{
    res.status(500).json({error:"the id is invalid "})
  }
})

app.post('/book',(req,res)=>{
   const book=req.body;

   console.log(book)
    
  
   db.collection('books')
   .insertOne(book)
   .then(result=>{
    res.status(201).json(result)
   }).catch(err=>{
    res.status(500).json({error:"Insertion is failed "})
   })
})

app.delete('/books/:id',(req,res)=>{

  if(ObjectId.isValid(req.params.id)){


    db.collection('books').deleteOne({_id:new  ObjectId(req.params.id)})
    .then(result=>{


      res.status(200).json(result)
    }).catch(err=>{


      res.status(500).json({error:"Delete is failed this  "})
    
    });
  }else{
    res.status(500).json({error:"the id is invalid "})
  }


})

app.patch('/books/:id',(req,res)=>{

  const update=req.body;

  
  if(ObjectId.isValid(req.params.id)){


    db.collection('books').deleteOne({_id:new  ObjectId(req.params.id)},{$set:update})
    .then(result=>{


      res.status(200).json(result)
    }).catch(err=>{


      res.status(500).json({error:"update  is failed this  "})
    
    });
  }else{
    res.status(500).json({error:"the id is invalid "})
  }


})