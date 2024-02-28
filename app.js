const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    console.log('you try to login');
    res.sendFile('/index.html')
    // this is how you send file
})


app.get('/login',(req,res)=>{
    res.send("you try to post  ")
})

const userhandler= require('./routes/user')
app.get('/user',userhandler);

const adminhandler= require('./routes/admin')
app.get('/admin',adminhandler);

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});