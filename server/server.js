const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()

const app = express();
app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());
//app.use(express.static('./public'))
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.use(cors())

const User = mongoose.model('User',{
    firstName:String,
    lastName:String,
    avatar:String,
    email:String,
})


app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:"all good"
    })
})


app.get("/users", async(req,res)=>{
    try{
        const users = await User.find()
        res.json({
            status:'came from users ,success',
            message:"all good", //u can also write here users
            data: users
        })
    }catch(error){
        res.json({
            statusbar: 'error',
            message:error.message
        })
    }
})

app.post('/users', async(req,res)=>{
    try{
        const {firstName,lastName,avatar,email}=req.body
        const users = await User.create({firstName,lastName,avatar,email})
        res.json({
            status:'came from users ,success',
            message:"user craeted sucessfully"
           
        })
    }catch(error){
        res.json({
            statusbar: 'error',
            message:error.message
        })
    }
})


app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log(`server runnning on http://localhost:${process.env.PORT}`)
    }).catch(error =>console.log(error))
  
})