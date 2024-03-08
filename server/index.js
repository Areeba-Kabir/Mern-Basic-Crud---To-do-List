const express= require ('express');
const mongoose=require('mongoose');
const cors=require('cors');
const UserModel= require('./model/Tasks')
require('dotenv').config()

const app=express();
app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.URI)
    .then(()=>{
            console.log("Connected to Database!")
            app.listen(process.env.PORT,()=>{
                console.log("server is running")
            })
    })
    .catch((err)=>{
        console.log(err);
    })

app.get('/',(req,res)=>{
    UserModel.find({ })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id,},{
        title:req.body.title,
        description: req.body.description, 
        status: req.body.status
    })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)  
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id}) 
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})