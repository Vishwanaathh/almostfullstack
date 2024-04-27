const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
     res.sendFile('C:\\Users\\yadav\\OneDrive\\Desktop\\withfrontend\\index.html');
});
app.post('/submit',(req,res)=>{
    const data=req.body.inputData;
    res.send(`Hello ra ${data}`);
})
app.listen(6000,()=>{
    console.log('Listening');
});