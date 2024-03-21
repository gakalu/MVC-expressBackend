const express=require('express');
const mongoose=require('mongoose')
const bankRouter=require('./router');
mongoose.connect('mongodb://localhost:27017/Workshop-01',err=>{
    if(err){
     console.log('DB error',err);
    }else{
     console.log('DB is connected');
    }
})
const app=express();
app.use(express.json());
app.use('/banks',bankRouter)
app.listen('3000',()=>console.log('3000 port is listing'));