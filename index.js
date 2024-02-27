const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Abc = require('./model/createModel')
const cors = require('cors')

mongoose.connect('mongodb+srv://ecom:EehrLzy3XYX5WzCB@cluster0.vii99b3.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
  console.log("mongoose")
});



app.use(express.json())
app.use(cors())

app.get('/get', function (req, res){
  Abc.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post('/create', function (req, res) {
  
  const {task} = req.body
   
  let data = new Abc({
    task: task
  })

  data.save()
  res.send(data)
  
})

app.put('/update/:id', function (req, res){
  const {id} = req.params;
  Abc.findByIdAndUpdate({_id: id}, {done: true})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.delete('/delete/:id', function (req,res){
  const {id} = req.params;
  Abc.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

const PORT = process.env.PORT


app.listen(8000,()=>{
    console.log("port connected")
})











